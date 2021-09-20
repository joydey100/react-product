import React from "react";

const SingleProduct = (props) => {
  // Destructure
  const { image, title, description, category, price } = props.product;

  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img
          src={image}
          alt="product"
          className="card-img-top mx-auto d-block"
        />
        <div className="product-info p-3">
          <h4 className="my-3 text-secondary"> {title} </h4>
          <p className="mb-3 text-secondary"> {description.slice(0, 150)}...</p>
          <h3 className="mb-3 text-main"> Price: ${price} </h3>
          <p className="mb-3 category text-secondary"> {category} </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
