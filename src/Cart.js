import React from 'react';

function Cart({ cartItems, updateQuantity }) {
    return (
        <div>
            <br />
            <hr />
            <center>
                <h2 style={{ color: '#2d545e', fontWeight: 'bold' }}>Your Cart Items</h2>
            </center>
            {cartItems.map((cartItem, index) => (
                <div style={{ paddingLeft: "10px", color: 'black' }} key={index} className="d11">
                    <img id="i1" src={cartItem.product.imgurl} alt="img" />
                    <div style={{ paddingLeft: "20px" }}>
                        <h3>Size: {cartItem.product.size}</h3>
                        <h3>Cost: Rs. {cartItem.product.price}</h3>
                    </div>
                    <div className="d3" style={{ color: ' #e1b382' }}>
                        <button onClick={() => updateQuantity(index, cartItem.quantity - 1)}>-</button>
                        <p style={{ padding: "5px" }}>{cartItem.quantity}</p>
                        <button
                            onClick={() => updateQuantity(index, cartItem.quantity + 1)}
                            disabled={cartItem.quantity >= cartItem.product.qty}
                        >+</button>
                        {cartItem.quantity > cartItem.product.qty && (
                            <p style={{ color: 'red', textAlign: 'center', paddingLeft: '20px' }}> Out of Stock</p>
                        )}
                    </div>
                </div>
            ))}
            <hr />
        </div>
    );
}

export default Cart;
