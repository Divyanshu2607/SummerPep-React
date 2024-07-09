import React, { useState } from 'react';

const Cart = () => {
  const [item1, setItem1] = useState(null);
  const [item2, setItem2] = useState(null);

  const addItem1 = () => setItem1({ name: 'Item 1', price: 100, count: 1 });
  const addItem2 = () => setItem2({ name: 'Item 2', price: 150, count: 1 });

  const incrementItem1 = () => setItem1((item1) => ({ ...item1, count: item1.count + 1 }));
  const decrementItem1 = () => setItem1((item1) => item1.count > 1 ? { ...item1, count: item1.count - 1 } : null);
  const deleteItem1 = () => setItem1(null);

  const incrementItem2 = () => setItem2((item2) => ({ ...item2, count: item2.count + 1 }));
  const decrementItem2 = () => setItem2((item2) => item2.count > 1 ? { ...item2, count: item2.count - 1 } : null);
  const deleteItem2 = () => setItem2(null);

  const totalAmount = (item1 ? item1.price * item1.count : 0) + (item2 ? item2.price * item2.count : 0);

  return (
    <div>
      <h1>Cart</h1>
       <button onClick={addItem1}>Add Item 1</button>
       <button onClick={addItem2}>Add Item 2</button>
      
      {item1 && (
        <div>
          <span>{item1.name} - Rs. {item1.price}</span>
          <button onClick={incrementItem1}>+</button>
          <button onClick={decrementItem1}>-</button>
          <button onClick={deleteItem1}>Delete</button>
          <span> Quantity: {item1.count}</span>
        </div>
      )}
      
      {item2 && (
        <div>
          <span>{item2.name} - Rs. {item2.price}</span>
          <button onClick={incrementItem2}>+</button>
          <button onClick={decrementItem2}>-</button>
          <button onClick={deleteItem2}>Delete</button>
          <span> Quantity: {item2.count}</span>
        </div>
      )}
      
      <div>
        <h2>Total Amount: Rs. {totalAmount}</h2>
      </div>
    </div>
  );
};

export default Cart;

