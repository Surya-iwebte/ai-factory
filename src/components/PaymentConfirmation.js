import React from 'react';

const PaymentConfirmation = () => {
    const displayConfirmation = (message) => {
        return <div><h2>Payment Confirmation</h2><p>{message}</p></div>;
    };

    return <div>{displayConfirmation('Payment completed successfully!')}</div>;
};

export default PaymentConfirmation;