import React, { useState } from 'react';
import ProductsList from '../components/ProductsList';
import products from '../productsdata/ProductsData';

const Products = () => {

    const [productCategories, setProductCategories] = useState("Pick a product category");

    return (
        <div className='product-page'>
            <div className='filter-bar'>
                <h3>Product Categories</h3>
                <button onClick={() => setProductCategories("Cameras")}>Cameras</button>
                <button onClick={() => setProductCategories("Speed Cameras")}>Speed Cameras</button>
                <button onClick={() => setProductCategories("Software")}>Software</button>
                <button onClick={() => setProductCategories("Document Recognition")}>Document Recognition</button>
            </div>
            <div className='products'>
                <ProductsList products={products.filter(product => product.category === productCategories)} title={productCategories} />
            </div>
        </div>
    );
}

export default Products;
