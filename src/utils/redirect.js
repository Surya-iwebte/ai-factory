export const redirectToPayment = (method) => {
    const urls = {
        'Card': 'https://payment-processor.com/card',
        'UPI': 'https://payment-processor.com/upi'
    };
    window.location.href = urls[method];
};