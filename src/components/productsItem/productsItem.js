import React from "react";
import s from "./productsItem.module.css";
import Ratings from "../rating/rating";
import { Link } from "react-router-dom";

const ProductsItem = ({ title, rating, id, image }) => {
  return (
    <div className={s.product_item}>
      <Link to={`/products/${id}`}>
        <div className={s.product_item_content}>
          <img className={s.product_image} src={image} alt={title} />
          <h2 className={s.product_title}>{title}</h2>
          <Ratings rating={rating.rate} />
        </div>
      </Link>
    </div>
  );
};
export default ProductsItem;
