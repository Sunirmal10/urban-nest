import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
// import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div>
      <Navbar/>
    {/* <Home/> */}
        {/* <ProductList/> */}
        {/* <SingleProduct/> */}
        {/* <Login/> */}
        {/* <Register/> */}
        <Cart/>
      <Footer/>
    </div>
  );
}

export default App;
