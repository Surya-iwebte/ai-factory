import { render } from '@testing-library/react';
import Cart from '../components/Cart';
import PaymentSelection from '../components/PaymentSelection';
import PaymentConfirmation from '../components/PaymentConfirmation';
import ErrorNotification from '../components/ErrorNotification';

test('testPaymentFlow', () => {
    const { getByText } = render(<Cart items={[{ id: 1, name: 'Item 1', price: 50 }, { id: 2, name: 'Item 2', price: 25 }]} />);
    expect(getByText('Total: $75')).toBeInTheDocument();

    render(<PaymentSelection />);
    const cardButton = getByText('Card');
    const upiButton = getByText('UPI');

    cardButton.click();
    expect(window.location.href).toBe('https://payment-processor.com/card');

    upiButton.click();
    expect(window.location.href).toBe('https://payment-processor.com/upi');

    render(<PaymentConfirmation />);
    expect(getByText('Payment completed successfully!')).toBeInTheDocument();

    render(<ErrorNotification />);
    expect(getByText('Transaction failed!')).toBeInTheDocument();
});