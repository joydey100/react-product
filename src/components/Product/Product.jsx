import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import "../../App.css";

const Product = () => {
  // State
  const [product, setProduct] = useState([]);

  //   useEffect
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center my-5 text-main"> Latest Product </h2>
      <div className="row g-4">
        {product.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
