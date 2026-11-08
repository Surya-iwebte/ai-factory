const request = require('supertest');
const express = require('express');
const { limitLoginAttempts } = require('../middleware/rateLimit');

const app = express();
app.use(express.json());
app.post('/login', limitLoginAttempts, (req, res) => {
  res.status(200).json({ message: 'Login successful' });
});

describe('Rate Limiting', () => {
  test('should allow the first 5 requests to succeed and return HTTP 200', async () => {
    const loginAttempts = Array.from({ length: 5 }).map(() => request(app).post('/login'));
    const responses = await Promise.all(loginAttempts);
    responses.forEach(response => {
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'Login successful' });
    });
  });

  test('should return HTTP 429 after 5 requests within a minute', async () => {
    const loginAttempts = Array.from({ length: 5 }).map(() => request(app).post('/login'));
    await Promise.all(loginAttempts);

    // Wait for 1 second before making the 6th attempt
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await request(app).post('/login');
    expect(response.status).toBe(429);
    expect(response.headers['retry-after']).toBe('60');
    expect(response.body).toEqual({ error: 'Too many attempts, try again later' });
  });
});