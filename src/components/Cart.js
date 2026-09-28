import React, { useState } from 'react';

const Cart = ({ items }) => {
    const [addedItems, setAddedItems] = useState(items || []);

    const renderCart = () => {
        const total = addedItems.reduce((sum, item) => sum + item.price, 0);
        return (
            <div>
                <h2>Cart</h2>
                <ul>
                    {addedItems.map(item => <li key={item.id}>{item.name} - ${item.price}</li>)}
                </ul>
                <h3>Total: ${total}</h3>
            </div>
        );
    };

    return <div>{renderCart()}</div>;
};

export default Cart;