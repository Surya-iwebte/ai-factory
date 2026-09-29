const { cancelOrder } = require('../services/orderCancellation');
const { sendNotification } = require('../services/cancellationNotification');
const assert = require('assert');

const orders = { '1': { createdAt: new Date(), status: 'Pending', amount: 100 } };

const testCancelOrderFlow = async () => {
    const result = await cancelOrder('1');
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.message, 'Order cancelled successfully');
    assert.strictEqual(result.refundDetails.amount, 100);
};

const testInvalidCancellationRequest = async () => {
    const orderId = '1';
    orders[orderId].createdAt = new Date(Date.now() - 6 * 60 * 1000); // 6 minutes ago
    const result = await cancelOrder(orderId);
    assert.strictEqual(result.success, false);
    assert.strictEqual(result.message, 'Cancellation period expired');
};

const testSuccessfulNotificationSend = async () => {
    const spy = jest.spyOn(console, 'log');
    await sendNotification('user1', { success: true, message: 'Order cancelled' });
    assert(spy.mock.calls[0][0].includes('Notification sent to user user1'));
    spy.mockRestore();
};

module.exports = { testCancelOrderFlow, testInvalidCancellationRequest, testSuccessfulNotificationSend };