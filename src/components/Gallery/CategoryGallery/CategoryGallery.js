import React from "react";
import "./CategoryGallery.css";

const CategoryGallery = () => {
  return (
    <div className="categoryHolder">
      <div className="categoryHeader">Shop by Category</div>
      <div className="categoryContainer">
        <div className="categoryItem">
          <img
            className="categoryItemImage"
            src="assets/images/sneakers.jpeg"
            alt="footwear image"
          />
          <p className="categoryItemInfo">Footwear</p>
        </div>
        <div className="categoryItem">
          <img
            className="categoryItemImage"
            src="assets/images/outerwear.jpeg"
            alt="outerwear"
          />
          <p className="categoryItemInfo">Outerwear</p>
        </div>
        <div className="categoryItem">
          <img
            className="categoryItemImage"
            src="assets/images/tops.jpeg"
            alt="tops"
          />
          <p className="categoryItemInfo">Tops</p>
        </div>
        <div className="categoryItem">
          <img
            className="categoryItemImage"
            src="assets/images/bottoms.jpeg"
            alt="bottoms"
          />
          <p className="categoryItemInfo">Bottoms</p>
        </div>
        <div className="categoryItem">
          <img
            className="categoryItemImage"
            src="/assets/images/accessories.jpeg"
            alt="accessories"
          />
          <p className="categoryItemInfo">Accessories</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryGallery;
