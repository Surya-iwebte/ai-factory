import InactivityTimer from '../components/InactivityTimer';

class SessionManager {
    resetIdleTimer() {
        InactivityTimer.resetTimer();
    }
}

export default new SessionManager();