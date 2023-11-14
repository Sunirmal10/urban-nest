import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div>
      <Navbar/>
    {/* <Home/> */}
        <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
