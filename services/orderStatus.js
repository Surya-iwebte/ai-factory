const orders = {}; // Mock order database

const updateStatus = async (orderId, status) => {
    const order = orders[orderId];
    if (!order) {
        throw new Error('Order not found');
    }
    order.status = status;
};

module.exports = { updateStatus };