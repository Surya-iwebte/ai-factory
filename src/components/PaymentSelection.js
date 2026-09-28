import React from 'react';
import { redirectToPayment } from '../utils/redirect';

const PaymentSelection = () => {
    const handlePaymentSelection = (method) => {
        if (method === 'Card' || method === 'UPI') {
            redirectToPayment(method);
        }
    };

    return (
        <div>
            <h2>Select Payment Method</h2>
            <button onClick={() => handlePaymentSelection('Card')}>Card</button>
            <button onClick={() => handlePaymentSelection('UPI')}>UPI</button>
        </div>
    );
};

export default PaymentSelection;