import React, { useState } from 'react';
import './App.css'

function CartItem() {
  const [count, setCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    setCount(1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); // hide notification after 3 seconds
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className='App-header'>
      <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/MC/SP/FN/69519039/51vz6i9-cml-sl1500-.jpg" height={200} width={200} />
      <br />
      {count === 0 ? (
        <button onClick={handleAddToCart}>Add to Cart</button>
      ) : (
        <div>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
      )}
      {showNotification && <p>Product added to your cart!</p>}
    </div>
  );
}

export default CartItem;
