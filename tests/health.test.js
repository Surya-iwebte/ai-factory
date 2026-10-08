const request = require('supertest');
const app = require('../server');

const testGetHealth = async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ "status": "ok" });
};

module.exports = { testGetHealth };