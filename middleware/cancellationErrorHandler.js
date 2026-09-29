const handleCancellationError = (err, req, res) => {
    if (err.message === 'Order not found') {
        res.status(404).json({ message: err.message });
    } else if (err.message === 'Cancellation period expired') {
        res.status(400).json({ message: err.message });
    } else {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { handleCancellationError };