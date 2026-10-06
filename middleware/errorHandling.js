function handleCancellationErrors(error, req, res, next) {
    if (error.message === 'Cancellation period has expired') {
        return res.status(400).json({ message: 'Cancellation period has expired' });
    }
    next(error);
}

module.exports = handleCancellationErrors;