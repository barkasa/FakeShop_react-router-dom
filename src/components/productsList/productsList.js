import React from "react";
import s from "./productsList.module.css";
import ProductsItem from "../productsItem/productsItem";

const ProductsList = ({ products }) => {
  return (
    <div className={s.products_list}>
      {products.map((elem) => (
        <ProductsItem key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default ProductsList;
