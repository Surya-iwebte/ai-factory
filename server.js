const express = require('express');
const HealthEndpoint = require('./routes/health');
const VersionEndpoint = require('./routes/version');

const app = express();

app.get('/health', HealthEndpoint.getHealth);
app.get('/version', VersionEndpoint.getVersion);

app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
