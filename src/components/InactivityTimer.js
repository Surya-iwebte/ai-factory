import ConfigManager from '../config/ConfigManager';
import SessionManager from '../services/SessionManager';
import AuditLogger from '../utils/AuditLogger';

class InactivityTimer {
    constructor() {
        this.timeoutDuration = ConfigManager.getInactivityTimeout();
        this.warningDuration = this.timeoutDuration - (2 * 60 * 1000);
        this.warningTimeout = null;
        this.signOutTimeout = null;
    }

    resetTimer() {
        clearTimeout(this.signOutTimeout);
        clearTimeout(this.warningTimeout);
        this.startTimer();
    }

    startTimer() {
        this.warningTimeout = setTimeout(() => this.showWarning(), this.warningDuration);
        this.signOutTimeout = setTimeout(() => this.signOut(), this.timeoutDuration);
    }

    signOut() {
        AuditLogger.logSignOut('userId_placeholder', new Date()); // Placeholder for userId
        console.log('User signed out due to inactivity.');
    }

    showWarning() {
        console.log('Warning: You will be signed out in 2 minutes due to inactivity.');
    }
}

export default new InactivityTimer();