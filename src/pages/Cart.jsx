import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="flex flex-col w-full gap-5 text-slate-600 mt-[80px] mb-5 px-5">
      <div className="flex justify-center text-sm font-semibold">YOUR CART</div>
      {/* top */}
      <div className="flex justify-between">
        <div className="flex scale-[0.75] md:scale-1 w-min items-center justify-center cursor-pointer py-2 border border-slate-400 rounded bg-white hover:bg-slate-400 text-slate-400 hover:text-white px-2 md:px-4 text-sm">
          <Link to={"/"}>CONTINUE SHOPPING</Link>
        </div>
        <span className="flex w-28 hover:underline text-sm cursor-pointer items-center">
          Cart items <div>{`(${0})`}</div>
        </span>
        <span className="flex w-28 hover:underline text-sm cursor-pointer items-center">
          Wishlist <div>{`(${0})`}</div>
        </span>
        <div className="md:flex hidden items-center cursor-pointer border border-slate-400 rounded bg-white scale-[0.75] md:scale-1 hover:bg-slate-400 text-slate-400 hover:text-white text-sm py-2 px-4">
          CHECKOUT NOW {">>"}
        </div>
      </div>
      {/* bottom */}
      {/* bottom wrapper */}
      <div className="flex flex-col md:flex-row gap-5"> 
      {/* bottom left */}
      {/* bottom left wrapper for many cards */}
        <div className="flex flex-col h-full md:gap-5 gap-2 w-full md:w-3/4">
            {/* individual item card  */}
          <div className="flex flex-col md:flex-row md:p-2 p-4 w-full h-full border justify-between rounded md:items-start items-center gap-3 md:gap-2 border-slate-300">
            {/* card image  */}
            <div className="flex w-28 h-28 md:h-full md:justify-center border border-slate-300 bg-slate-300">
              <img
                className=""
                src="https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHwxfDB8fHww"
                alt=""
              />
            </div>
            {/* card details  */}
            <div className="flex flex-col h-full gap-5 border border-slate-300 p-2 text-center md:text-left md:py-2 py-4 text-sm">
              <div className="flex justify-center md:justify-start font-semibold">
                DENIM Jeans
              </div>
              <div className="font-semibold">
                ID: 120073ABCdJirk3734HgJAxJ2k
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            {/* buttons and price  */}
            <div className="flex w-full md:w-1/3 gap-4 items-center lg:mr-9 mr-2 pt-2 border-t border-slate-300 md:border-none">
              <div className="flex items-center border border-slate-400 md:mt-9 rounded w-min scale-[0.75] lg:scale-1">
                <IconButton>
                  <AddRounded />
                </IconButton>
                <div className="flex items-center border-x border-slate-400 justify-center w-8 h-7 bg-white">
                  1
                </div>
                <IconButton>
                  <RemoveRounded />
                </IconButton>
              </div>
              <div className="flex flex-col md:justify-start justify-center md:gap-3 gap-1">
                <div className="font-semibold text-sm">Price:</div>
                <span className="lg:text-lg">₹ 30.00</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom right */}
        <section className="flex flex-col md:w-1/4 w-full border rounded border-slate-300 text-slate-500 p-3 gap-5">
          <header className="text-sm font-semibold">ORDER DETAILS</header>
          <main className="flex flex-col text-sm gap-5">
            <div>
              Subtotal: <span>₹ 30</span>
            </div>
            <div>
              Shipping: <span>₹ 30</span>
            </div>
            <div>
              Discount: <span>₹ 30</span>
            </div>
            <div>
              Total: <span>₹ 30</span>
            </div>
          </main>
          <div className="flex py-2 rounded bg-pink-500 text-xs cursor-pointer hover:bg-pink-600 text-white font-semibold justify-center items-center">
            PLACE ORDER
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
