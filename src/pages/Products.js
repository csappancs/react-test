import React, { useState } from 'react';
import ProductsList from '../components/ProductsList';

const Products = () => {
    const [products, setProducts] = useState([
        { prodName: "Vidar Axel", category: "camera", body: "lorem ipsum...", id: "1" },
        { prodName: "Vidar Container", category: "Axel camera", body: "lorem ipsum...", id: "2" },
        { prodName: "Vidar Speed", category: "speed camera", body: "lorem ipsum...", id: "3" },
        { prodName: "Vidar Speed", category: "ADR camera", body: "lorem ipsum...", id: "4" },
        { prodName: "Vidar Speed", category: "speed camera", body: "lorem ipsum...", id: "5" },
        { prodName: "Vidar Speed", category: "speed camera", body: "lorem ipsum...", id: "6" },
    ]);

    return (
        <div className='product-page'>
            <div className='filter-bar'>
                <h3>Filter bar</h3>
            </div>
            <div className='products'>
                <ProductsList products={products.filter((products) => products.category === "speed camera")}  title="Speed Cameras"/>
                <ProductsList products={products.filter((products) => products.category === "ADR camera")}  title="ADR Cameras"/>
                <ProductsList products={products}  title="All products"/>
            </div>
        </div>
    )
}

export default Products;


