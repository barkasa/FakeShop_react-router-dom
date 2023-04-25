import React, { useEffect, useState } from "react";
import s from "./productsItemPage.module.css";
import { useParams } from "react-router-dom";
import Rating from "../../components/rating/rating";

const ProductsItemPage = () => {
  let [item, setItem] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div className={s.products_item_page}>
      <h4 className={s.products_title}>Description of Product</h4>
      <h1 className={s.products_item_title}>{item.title}</h1>
      <img src={item.image} alt={item.title} />
      <h3>{`Price: ${item.price} $`}</h3>
      <p className={s.products_item_description}>
        <b>Description: </b>
        {item.description}
      </p>
      {item.rating ? <Rating rating={item.rating.rate} /> : null}
    </div>
  );
};

export default ProductsItemPage;
