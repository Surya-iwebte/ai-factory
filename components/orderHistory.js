const orders = {}; // Mock database

async function updateOrderHistory(userId) {
    return Object.values(orders).filter(order => order.userId === userId);
}

module.exports = { updateOrderHistory };