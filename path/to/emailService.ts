export const sendEmail = async (customerId: string, orderId: string, refundAmount: number): Promise<void> => {
  if (!customerId || !orderId) {
    throw new Error('Invalid customerId or orderId');
  }
  const emailContent = `Your order ${orderId} has been cancelled. Refund Amount: ${refundAmount}`;
  // Logic to send email (pseudo-code)
  await emailService.send({ to: customerId, subject: 'Order Cancellation', body: emailContent });
};