import InactivityTimer from '../components/InactivityTimer';

jest.useFakeTimers();

test('should sign out after 15 minutes', () => {
    InactivityTimer.resetTimer();
    jest.advanceTimersByTime(15 * 60 * 1000);
    // Add assertion for sign out logic
});

test('should show warning after 13 minutes', () => {
    InactivityTimer.resetTimer();
    jest.advanceTimersByTime(13 * 60 * 1000);
    // Add assertion for showing warning
});

test('should reset inactivity timer on authenticated API call', () => {
    InactivityTimer.resetTimer();
    InactivityTimer.resetTimer();
    // Add assertion to verify timer is correctly reset
});