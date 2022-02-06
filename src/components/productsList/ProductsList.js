import React from 'react'
import './productslist.css';
import Product from '../product/Product';
import {products} from '../../data';
const ProductsList = () => {
    return (
        <div className="products-list" id="work">
            <div className="products-header">
                <h1 className="products-title">Create & Inspire</h1>
                <p className="products-desc">
                    Here is a list of my previous projects
                    <br/>
                    <span>Feel free to check them out</span>     
                </p>
            </div>
            <div className="projects">
                {products && products.map(product => (
                    <Product
                        key={product.id} 
                        img={product.img}
                        link={product.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;
