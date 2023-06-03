import React, { useState } from "react";
import "./productslist.css";
import Product from "../../components/product/Product";
import { products } from "../../data";
import Buttons from "../../components/buttons/Buttons";
import { motion } from "framer-motion";

const ProductsList = () => {
  const [filteredCategory, setFilteredCategory] = useState("0");
  return (
    <div className="products-list wrapper" id="work">
      <div className="products-header">
        <h1 className="products-title">Gallery</h1>
        <Buttons
          filteredCategory={filteredCategory}
          setFilteredCategory={setFilteredCategory}
        />
      </div>
      <motion.div className="projects" layout>
        {products &&
          products
            .filter((product) => product.cats.includes(filteredCategory))
            .map((product) => (
              <Product
                key={product.id}
                product={product}
                height={
                  products.filter((product) =>
                    product.cats.includes(filteredCategory)
                  ).length < 3
                    ? true
                    : false
                }
              />
            ))}
      </motion.div>
    </div>
  );
};

export default ProductsList;
