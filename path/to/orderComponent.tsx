import React from 'react';
import ConfirmationPrompt from './confirmationComponent';
import { updateOrderStatus } from './orderService';

interface OrderComponentProps {
  orderStatus: string;
  orderId: string;
  customerId: string;
  refundAmount: number;
}

const OrderComponent: React.FC<OrderComponentProps> = ({ orderStatus, orderId, customerId, refundAmount }) => {
  const [showPrompt, setShowPrompt] = React.useState(false);
  const [currentOrderStatus, setCurrentOrderStatus] = React.useState(orderStatus);

  const handleCancelClick = () => {
    setShowPrompt(true);
  };

  const handleConfirmationClose = async () => {
    setShowPrompt(false);
    if (currentOrderStatus === 'Pending') {
      await updateOrderStatus(orderId, 'Cancelled');
      setCurrentOrderStatus('Cancelled');
    }
  };

  return (
    <div>
      {currentOrderStatus === 'Pending' && <button onClick={handleCancelClick}>Cancel Order</button>}
      {showPrompt && <ConfirmationPrompt orderId={orderId} customerId={customerId} refundAmount={refundAmount} onClose={handleConfirmationClose} />}
    </div>
  );
};

export default OrderComponent;