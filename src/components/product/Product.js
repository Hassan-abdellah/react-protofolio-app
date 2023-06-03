import React from "react";
import "./product.css";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Product = ({ product, height }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={height ? "product height" : "product"}
    >
      <div className="browser-shape">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        <LazyLoadImage
          src={product.img}
          alt="product"
          className="product-img animate-bg"
          effect="blur"
        />
      </a>
    </motion.div>
  );
};

export default Product;
