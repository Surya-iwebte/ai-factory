const { cancelOrder } = require('../services/cancellation');
const Order = require('../models/order');

let orders = {};

beforeEach(() => {
    orders = {};
});

test('cancelOrder within 5 minutes', async () => {
    const orderId = '1';
    orders[orderId] = new Order(orderId, 'Pending', new Date());
    const message = await cancelOrder(orderId);
    expect(message).toBe('Order successfully canceled');
    expect(orders[orderId].status).toBe('Canceled');
});

test('cancelOrder after 5 minutes', async () => {
    const orderId = '2';
    orders[orderId] = new Order(orderId, 'Pending', new Date(Date.now() - 6 * 60 * 1000));
    await expect(cancelOrder(orderId)).rejects.toThrow('Cancellation period has expired');
});

test('updateOrderHistory reflects cancellations', async () => {
    const userId = 'user1';
    orders['1'] = new Order('1', 'Canceled', new Date());
    orders['2'] = new Order('2', 'Pending', new Date());
    const history = await updateOrderHistory(userId);
    expect(history.length).toBe(2);
});