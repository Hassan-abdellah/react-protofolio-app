import React from 'react'
import './product.css';
const Product = ({img , link}) => {
    return (
        <div className="product">
            <div className="browser-shape">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img 
                 src={img}
                 alt="" className="product-img" />
            </a>
        </div>
    )
}

export default Product;
