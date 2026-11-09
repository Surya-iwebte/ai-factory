const request = require('supertest');
const express = require('express');
const SaveDeliveryInstructionsHandler = require('../handler/SaveDeliveryInstructionsHandler');
const GetDeliveryInstructionsHandler = require('../handler/GetDeliveryInstructionsHandler');

const app = express();
app.use(express.json());
app.put('/orders/:orderId/delivery-instructions', SaveDeliveryInstructionsHandler);
app.get('/orders/:orderId/delivery-instructions', GetDeliveryInstructionsHandler);

describe('Delivery Instructions API', () => {
  it('should save valid delivery instructions', async () => {
    const response = await request(app)
      .put('/orders/1/delivery-instructions')
      .send({ instructions: 'Leave at the front door.' });
    expect(response.status).toBe(200);
  });

  it('should return 400 for empty instructions', async () => {
    const response = await request(app)
      .put('/orders/1/delivery-instructions')
      .send({ instructions: '' });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Instructions cannot be empty.');
  });

  it('should return 400 for overly long instructions', async () => {
    const longInstructions = 'A'.repeat(201);
    const response = await request(app)
      .put('/orders/1/delivery-instructions')
      .send({ instructions: longInstructions });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Instructions must be 300 characters or less.');
  });

  it('should return 404 if no instructions found', async () => {
    const response = await request(app)
      .get('/orders/1/delivery-instructions');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('No instructions found for this order.');
  });
});
