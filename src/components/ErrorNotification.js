import React from 'react';

const ErrorNotification = () => {
    const showError = (message) => {
        return <div style={{color: 'red'}}><h2>Error</h2><p>{message}</p></div>;
    };

    return <div>{showError('Transaction failed!')}</div>;
};

export default ErrorNotification;