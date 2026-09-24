class WarningDialog {
    showDialog() {
        console.log('Displaying warning dialog for session expiration.');
    }

    staySignedIn(callback) {
        callback(); // Execute the provided callback function to stay signed in
    }
}

export default new WarningDialog();