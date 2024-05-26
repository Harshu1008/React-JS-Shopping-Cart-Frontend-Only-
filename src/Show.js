import React from 'react';

function Show({ filteredProducts, addToCart }) {
    return (
        <div className="d1">
            {filteredProducts.map(product => (
                <center key={product.id}>
                    <div className="d2">
                        <img id="images" src={product.imgurl} alt="img" />
                        <div className="ind">
                        <p className="p">Qty : {product.qty}</p>
                        <p className="p">Size : {product.size}</p>
                        </div>
                        <p className='p1'>Cost : Rs.{product.price}</p>
                        
                        <button className="but" onClick={() => addToCart(product)}>Add to Cart</button>
                        
                    </div>
                </center>
            ))}
        </div>
    );
}

export default Show;