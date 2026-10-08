const request = require('supertest');
const app = require('../server');
const fs = require('fs');
const path = require('path');

const testGetVersion = async () => {
    const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json')));
    const response = await request(app).get('/version');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ "version": packageJson.version });
};

module.exports = { testGetVersion };