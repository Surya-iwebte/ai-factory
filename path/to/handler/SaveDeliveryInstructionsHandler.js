const DeliveryInstructionsValidator = require('../validator/DeliveryInstructionsValidator');

const deliveryInstructions = {};

const SaveDeliveryInstructionsHandler = async (req, res) => {
  const { orderId } = req.params;
  const { instructions } = req.body;

  try {
    DeliveryInstructionsValidator.validate(instructions);
    deliveryInstructions[orderId] = instructions;
    res.status(200).json({ orderId, instructions, updatedAt: new Date() });  // Updated response
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = SaveDeliveryInstructionsHandler;
