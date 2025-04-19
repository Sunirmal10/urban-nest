import { AddRounded, DeleteOutline, RemoveRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  incrementItemQuantity,
  decrementItemQuantity,
  removeItemFromCart,
  clearCart,
  decrementTotalPrice,
  incrementTotalPrice,
  calculateTotalPrice,
} from "../redux/features/cartSlice";
import { Bounce, ToastContainer, toast } from 'react-toastify';

const Cart = () => {

  const dispatch = useDispatch();

  const notify = () => { 
    cartItems.length > 0 ? toast.success("Order placed!") : toast.warn("The cart is empty!") 
}
  const [totalPrice, setTotalPrice] = React.useState([]);

  const cartItems = useSelector((state) => state.app.cartItems);
  const totalCartItemsPrice = useSelector(
    (state) => state.app.totalCartItemsPrice
  );
  console.log(cartItems, "cartItems");

  // const changeQuantity = (command) => {
  //   if (command === "add") {
  //     dispatch(incrementItemQuantity(cartItem.id))
  //   } else {
  //     dispatch(decrementItemQuantity(cartItem.id))
  //   }
  //   }

  // }

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [cartItems]);

  return (
    <div className="flex flex-col w-full gap-5 text-slate-600 mt-[80px] mb-5 px-5">
      <div className="flex justify-center text-sm font-semibold">YOUR CART</div>
      {/* top */}
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex scale-[0.75] md:scale-1 md:w-48 w-36 h-16 items-center justify-center cursor-pointer py-2 border border-slate-400 rounded bg-white hover:bg-slate-400 text-slate-400 hover:text-white px-2 md:px-4 text-sm">
            {"<<"} CONTINUE SHOPPING
          </div>
        </Link>
        <span className="flex w-28 hover:underline text-xs cursor-pointer items-center">
          Cart items <div>({cartItems ? cartItems.length : 0})</div>
        </span>
        {/* <span className="flex w-28 hover:underline text-xs cursor-pointer items-center">
          Wishlist <div>{`(${0})`}</div>
        </span> */}
        <button
          className="flex justify-center w-20 h-10 border border-red-400 rounded bg-white hover:bg-red-400 text-red-400 hover:text-white text-xs cursor-pointer items-center active:scale-90"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Empty Cart
          
        </button>
        {/* <div className="md:flex hidden items-center cursor-pointer border border-slate-400 rounded bg-white scale-[0.75] md:scale-1 hover:bg-slate-400 text-slate-400 hover:text-white text-sm py-2 px-4">
          CHECKOUT NOW {">>"}
        </div> */}
      </div>
      {/* bottom */}
      {/* bottom wrapper */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* bottom left */}
        {/* bottom left wrapper for many items */}
        <div className="flex flex-col rounded h-full md:gap-3 gap-2 w-full md:w-3/4">
          {/* individual item card  */}
          {cartItems.map((cartItem, i) => {
            return (
              <div
                className="flex md:p-4 p-3 w-full sm:h-20 md:h-24  bg-slate-100 border-slate-200 justify-between rounded items-start gap-1 md:gap-2 shadow-md"
                key={i}
              >
                {/* item image */}
                <img
                  className="w-14 h-14 rounded"
                  src={cartItem.img}
                  alt={cartItem.title}
                />
                {/* item name, id, and price (optional) */}
                <div className="flex flex-col gap-1 text-xs w-1/6 font-semibold">
                  <span className="md:text-sm text-xs text-gray-800">
                    {cartItem.title}
                  </span>
                  <span className="font-normal">ID: {cartItem.id}</span>
                  <span className="md:hidden">₹ {cartItem.price}</span>
                </div>

                {/* add, remove, del buttons */}
                <span className="flex flex-col md:flex-row mt-[-0.2rem] justify-start scale-70">
                  <div className="flex items-center p-0 rounded-md scale-[0.6] md:scale-75 cursor-pointer">
                    <IconButton >
                    <RemoveRounded
                    className="bg-yellow-300 rounded-full hover:bg-yellow-400"
                      onClick={() => {
                        dispatch(decrementItemQuantity(cartItem.id));
                        dispatch(decrementTotalPrice(cartItem.id));
                        // dispatch(calculateTotalPrice());
                      }}
                    />
                    </IconButton>
                  

                    <div className="flex items-center rounded-sm  border-slate-400 ml-1 justify-center w-8 h-7 bg-white">
                      {cartItem.quantity}
                    </div>
                      <IconButton>
                      <AddRounded
                      className="bg-yellow-300 rounded-full hover:bg-yellow-400"
                      onClick={() => {
                        dispatch(incrementItemQuantity(cartItem.id));
                        dispatch(incrementTotalPrice(cartItem.id));
                        // dispatch(calculateTotalPrice());
                      }}
                    />
                      </IconButton>
                   
                  </div>
                  <button
                    onClick={() => dispatch(removeItemFromCart(cartItem.id))}
                  >
                    <IconButton>
                      <DeleteOutline className="text-slate-400" />
                    </IconButton>
                  </button>
                </span>
                {/* Single Price */}
                <span className="md:flex hidden flex-col h-full gap-4 text-xs">
                  <strong>Price(₹):</strong>
                  <span> {cartItem.price}</span>
                </span>
                {/* Total Quantity */}
                <span className="flex flex-col items-center h-full gap-4 text-xs">
                  <strong>Quantity:</strong>
                  <span>{cartItem.quantity}</span>
                </span>
                {/* Total Price */}
                <span className="flex flex-col h-full gap-4 text-xs">
                  <strong>Total(₹):</strong>
                  <span>{cartItem.totalPrice}</span>
                </span>
              </div>
            );
          })}
        </div>
        {/* bottom right */}
        <section className="flex flex-col md:w-1/4 w-full h-[16.5rem] border rounded border-slate-300 text-slate-500 p-3 gap-5">
          <header className="text-sm font-semibold">ORDER DETAILS</header>
          <main className="flex flex-col text-sm gap-5 font-semibold">
            <div>
              Sub Total:{" "}
              <span>
                ₹ {totalCartItemsPrice ? totalCartItemsPrice : "00.00"}
              </span>
            </div>
            <div>
              Shipping:{" "}
              <span className="text-yellow-600">
                ₹ {totalCartItemsPrice ? "100" : "00.00"}
              </span>
            </div>
            <div>
              Discount:{" "}
              <span className="text-red-400">
                - ₹ {totalCartItemsPrice ? "300" : "00.00"}
              </span>
            </div>
            <div>
              Total:{" "}
              <span className="text-green-600">
                ₹{" "}
                {totalCartItemsPrice
                  ? parseInt(totalCartItemsPrice) - 300 + 100
                  : "00.00"}
              </span>
            </div>
          </main>
          <button className="flex py-2 rounded bg-pink-500 text-xs cursor-pointer hover:bg-pink-600 text-white active:scale-95 font-semibold justify-center items-center"
          onClick={() => {
            // dispatch(clearCart());
            notify()
          }}
          >
            PLACE ORDER
          </button>
              <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
          />
             
        </section>
      </div>
    </div>
  );
};

export default Cart;
