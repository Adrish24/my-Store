import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import MyCart from "./pages/MyCart/MyCart";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";

import { DataProvider } from "./context/AppContext";

const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/products/:category/:id" element={<Product />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};
export default App;
