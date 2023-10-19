import React, { useState } from 'react';
import ProductsList from '../components/ProductsList';

const Products = () => {
    const [products, setProducts] = useState([
        { prodName: "Vidar Axel", body: "lorem ipsum...", id: "1" },
        { prodName: "Vidar Container", body: "lorem ipsum...", id: "2" },
        { prodName: "Vidar Speed", body: "lorem ipsum...", id: "3" },
        { prodName: "Vidar Speed", body: "lorem ipsum...", id: "3" }
    ]);

    return (
        <div className='products'>
            <ProductsList products={products}  title="All products"/>
        </div>
    )
}

export default Products;
