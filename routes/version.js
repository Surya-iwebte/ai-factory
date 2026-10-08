const fs = require('fs');
const path = require('path');

const getVersion = (req, res) => {
    const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json')));
    res.status(200).json({ "version": packageJson.version });
};

module.exports = { getVersion };