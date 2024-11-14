import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"; 
import "./productList.css";
import React from "react";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p className="not-found-message">Not Found</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => {
        const fullStars = Math.floor(product.rating); 
        const hasHalfStar = product.rating % 1 !== 0; 
        const totalStars = 5;

        return (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.brand}</p>
            <p>${product.price}</p>
            <p className="rating">
              <span className="rating-value">{product.rating}</span>
              {[...Array(totalStars)].map((_, index) => {
                if (index < fullStars) {
                  return (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="star filled"
                    />
                  );
                } else if (index === fullStars && hasHalfStar) {
                  return (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStarHalfAlt} 
                      className="star filled"
                    />
                  );
                } else {
                  return (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="star"
                    />
                  );
                }
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
