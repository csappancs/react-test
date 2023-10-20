import React, { useState, useEffect } from 'react';
import ProductsList from '../components/ProductsList';

const imageVidar = require("../img/products/cameras/Vidar_Camera_Products_420x280_new.jpg");

const Products = () => {
    const [products, setProducts] = useState([
        { prodName: "Vidar Axel", category: "camera", body: "lorem ipsum...", id: "1", image: imageVidar },
        { prodName: "Vidar Container", category: "Axel camera", body: "lorem ipsum...", id: "2", image: imageVidar },
        { prodName: "Vidar Speed", category: "speed camera", body: "lorem ipsum...", id: "3", image: imageVidar },
        { prodName: "Vidar Speed", category: "ADR camera", body: "lorem ipsum...", id: "4", image: imageVidar },
        { prodName: "Vidar Speed", category: "speed camera", body: "lorem ipsum...", id: "5", image: imageVidar },
        { prodName: "Vidar Speed with image", category: "speed camera", body: "lorem ipsum...", id: "6", image: imageVidar },
    ]);

    const [productCategories, setProductCategories] = useState("camera");

    return (
        <div className='product-page'>
            <div className='filter-bar'>
                <h3>Product Categories</h3>
                <button onClick={() => setProductCategories("camera")}>Cameras</button>
                <button onClick={() => setProductCategories("speed camera")}>Speed Camera</button>
                <button onClick={() => setProductCategories("Axel camera")}>Axel camera</button>
                <button onClick={() => setProductCategories("ADR camera")}>ADR camera</button>
            </div>
            <div className='products'>
                <ProductsList products={products.filter(product => product.category === productCategories)} title={productCategories} />
            </div>
        </div>
    );
}

export default Products;
