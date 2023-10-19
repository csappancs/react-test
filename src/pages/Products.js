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
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1"> I have a bike</label><br/>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                <label for="vehicle2"> I have a car</label><br/>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                <label for="vehicle3"> I have a boat</label>
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
