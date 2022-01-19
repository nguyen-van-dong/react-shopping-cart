import React from 'react'

function Product({products}) {
    return (
        <div>
            <ul className="products">
                {
                    products.map(product => (
                        <li key={product.id}>
                            <div className="product">
                                <a href="#">
                                    <img src={product.image} alt={product.name}/>
                                    <p>{product.name}</p>
                                </a>

                                <div className="product-price">
                                    <div>{product.price}</div>
                                    <button className="button primary">Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Product
