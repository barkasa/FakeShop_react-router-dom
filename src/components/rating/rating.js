import React from "react";
import s from "./rating.module.css";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const stars = [...Array(5)].map((_, i) => {
    const ratingValue = i + 1;
    return (
      <span key={i}>
        <FaStar color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} />
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default Rating;
