const handleError = (error) => {
  return { status: 400, message: error.message };
};

module.exports = { handleError };
