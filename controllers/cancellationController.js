const { cancelOrder } = require('../services/orderCancellation');
const { sendNotification } = require('../services/cancellationNotification');

const cancelOrderController = async (req, res) => {
    const { orderId, userId } = req.body;
    try {
        const cancellationOutcome = await cancelOrder(orderId);
        res.status(cancellationOutcome.success ? 200 : 400).json(cancellationOutcome);
        if (cancellationOutcome.success) {
            await sendNotification(userId, cancellationOutcome);
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { cancelOrderController };