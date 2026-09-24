class ConfigManager {
    constructor() {
        this.inactivityTimeout = 15 * 60 * 1000; // default 15 minutes in milliseconds
    }

    getInactivityTimeout() {
        return this.inactivityTimeout;
    }

    setInactivityTimeout(timeout) {
        if (typeof timeout !== 'number' || timeout <= 0) {
            throw new Error('Timeout must be a positive number.');
        }
        this.inactivityTimeout = timeout;
    }
}

export default new ConfigManager();