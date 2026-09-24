import InactivityTimer from './components/InactivityTimer';
import AuditLogger from './utils/AuditLogger';
import WarningDialog from './components/WarningDialog';

class App {
    signOut() {
        const userId = 'userId_placeholder'; // Replace with actual user ID
        AuditLogger.logSignOut(userId, new Date());
        console.log('Redirecting user to sign-in page.');
    }
}

export default App;