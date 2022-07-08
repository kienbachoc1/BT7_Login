import "./App.css";
import SignUp from "./pages/Register/SignUp";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Detail from "./pages/Detail/Detail";
import { Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import { useState } from "react";
import PrivateRoute from "./components/Route/PrivateRoute";
import FormProduct from "./pages/FormProduct/FormProduct";

function App(props) {
  const [islogged, setIsLogged] = useState(!!localStorage?.getItem("user"));
  
  return (
    <Routes>
      <Route path="/login" element={<SignUp setIsLogged={setIsLogged} />} />
      <Route path="/" element={<SignUp setIsLogged={setIsLogged} />} />
      <Route element={<PrivateRoute isLogged={islogged} />}>
        <Route element={<HomeTemplate />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product">
            <Route index element={<Product />} />
            <Route path="formprod/:id" element={<FormProduct />} />
          </Route>
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Route>
      <Route path="/*" element={<h1>There's nothing here: 404!</h1>} /> 
    </Routes>
  );
}

export default App;
