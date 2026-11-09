const deliveryInstructions = {};

const GetDeliveryInstructionsHandler = async (req, res) => {
  const { orderId } = req.params;
  const instructions = deliveryInstructions[orderId];

  if (!instructions) {
    return res.status(404).json({ status: 404, message: 'No instructions found for this order.' });
  }
  res.status(200).json({ orderId, instructions });
};

module.exports = GetDeliveryInstructionsHandler;
