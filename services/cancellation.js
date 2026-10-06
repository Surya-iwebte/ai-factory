const Order = require('../models/order');

let orders = {}; // Mock database

async function cancelOrder(orderId) {
    const order = orders[orderId];
    if (!order) {
        throw new Error('Order not found');
    }
    const now = new Date();
    const createdAt = new Date(order.createdAt);
    const timeDiff = (now - createdAt) / 1000 / 60; // difference in minutes
    if (timeDiff > 5) {
        throw new Error('Cancellation period has expired');
    }
    order.status = 'Canceled';
    return 'Order successfully canceled';
}

module.exports = { cancelOrder };