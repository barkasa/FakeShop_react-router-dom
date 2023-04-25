// import s from "./productsPage.module.css";
// import React, { useEffect, useState } from "react";
// import ProductsList from "../../components/productsList/productsList";

// const ProductsPage = () => {
//   let [products, setProducts] = useState([]);

//   useEffect(() => {
//     const url = "https://fakestoreapi.com/products";
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   return (
//     <div className={s.products_title}>
//       {/* <div className={s.products_name}> */}
//       {/* <h1>ProductsPage</h1> */}
//       <div className={s.main_container}>
//         <ProductsList products={products} />
//       </div>
//       {/* </div> */}
//     </div>
//   );
// };
// export default ProductsPage;
import s from "./productsPage.module.css";
import React, { useEffect, useState } from "react";
import ProductsList from "../../components/productsList/productsList";

const ProductsPage = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className={s.products_page}>
      <h1 className={s.products_title}>Products</h1>
      <div className={s.products_container}>
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
