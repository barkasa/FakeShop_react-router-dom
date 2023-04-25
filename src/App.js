import "./app.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomePage from "./pages/home/homePage";
import NotFoundPage from "./pages/notFoundPage/notFoundPage";
import ProductsPage from "./pages/products/productsPage";
import ProductsItemPage from "./pages/productsItemPage/productsItemPage";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      {/* <HashRouter hashType="hashbang"> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductsItemPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      {/* </HashRouter> */}
      <Footer />
    </div>
  );
};

export default App;
