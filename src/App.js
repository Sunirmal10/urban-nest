import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";




function App() {

  const Layout = () => {
    return (
       <>
         
       <Navbar/>
       <Outlet/>
       <Footer/>
       </>

    )
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/product/:id",
          element: <SingleProduct/>
        },
        {
          path: "/product-list",
          element: <ProductList/>
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
      ]
    },    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;
