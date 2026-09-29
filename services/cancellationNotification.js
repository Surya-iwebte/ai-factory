const sendNotification = async (userId, cancellationOutcome) => {
    // Assume a notification service
    console.log(`Notification sent to user ${userId}: ${JSON.stringify(cancellationOutcome)}`);
};

module.exports = { sendNotification };