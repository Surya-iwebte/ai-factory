import React, { useState } from 'react';
import { updateOrderStatus } from './orderService';
import { releaseStock } from './stockService';
import { sendEmail } from './emailService';
import { AuditLog } from './logService';

interface ConfirmationPromptProps {
  orderId: string;
  customerId: string;
  refundAmount: number;
  onClose: () => void;
}

const ConfirmationPrompt: React.FC<ConfirmationPromptProps> = ({ orderId, customerId, refundAmount, onClose }) => {
  const [reason, setReason] = useState('');

  const handleConfirm = async () => {
    if (!reason) {
      alert('Please provide a reason for cancellation.');
      return;
    }
    const time = new Date().toISOString();
    await releaseStock(orderId);
    await updateOrderStatus(orderId, 'Cancelled');
    await sendEmail(customerId, orderId, refundAmount);
    await AuditLog.logCancellation(orderId, customerId, time, reason);
    onClose();
  };

  return (
    <div>
      <h2>Are you sure you want to cancel?</h2>
      <input type='text' value={reason} onChange={(e) => setReason(e.target.value)} placeholder='Reason for cancellation' />
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default ConfirmationPrompt;