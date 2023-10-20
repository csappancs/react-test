import React from 'react'

export default function ProductsList(props) {
    const products = props.products;
    const title = props.title;

  return (
    <div className='product-preview'>
        <h2 className='product-category-title'> {title} </h2>
        <div className='product-lists'>
            {products.map((product) => (
                <div key={product.id} className='single-product'>
                  <img src={product.image} alt="product image is missing" height={170} width={255}/>
                  <h3>{product.prodName}</h3>
                  <p>About {product.prodName}: {product.body}</p>
                  <button>Learn more</button>
                </div>
            ))}
        </div>
    </div>
  )
}
