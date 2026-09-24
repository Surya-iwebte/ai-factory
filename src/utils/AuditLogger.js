class AuditLogger {
    logSignOut(userId, timestamp) {
        console.log(`User ${userId} signed out at ${timestamp}`);
        // Here you would typically log to a file or external service
    }
}

export default new AuditLogger();