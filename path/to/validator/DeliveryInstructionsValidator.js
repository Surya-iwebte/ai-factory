class DeliveryInstructionsValidator {
  static validate(instructions) {
    if (!instructions) {
      throw new Error('Instructions cannot be empty.');
    }
    if (instructions.length > 200) {  // Changed back from 300 to 200
      throw new Error('Instructions must be 300 characters or less.');  // Updated error message
    }
  }
}

module.exports = DeliveryInstructionsValidator;
