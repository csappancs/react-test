import React from 'react'

export default function ProductsList(props) {
    const products = props.products;
    const title = props.title;

  return (
    <div className='product-preview'>
        <h2> {title} </h2>
        <div className='product-lists'>
            {products.map((product) => (
                <div key={product.id} className='single-product'>
                        <h2>{product.prodName}</h2>
                        <p>About {product.prodName}: {product.body}</p>
                        <button>Learn more</button>
                </div>
            ))}
        </div>
    </div>
  )
}
