const orders = {}; // Mock order database

const cancelOrder = async (orderId) => {
    const order = orders[orderId];
    if (!order) {
        throw new Error('Order not found');
    }
    const orderTime = new Date(order.createdAt);
    const currentTime = new Date();
    const timeDifference = (currentTime - orderTime) / 1000 / 60; // in minutes

    if (timeDifference > 5) {
        return { success: false, message: 'Cancellation period expired' };
    }

    order.status = 'Cancelled';
    const refundDetails = { amount: order.amount, refundId: 'REFUND123' };
    return { success: true, message: 'Order cancelled successfully', refundDetails };
};

module.exports = { cancelOrder };