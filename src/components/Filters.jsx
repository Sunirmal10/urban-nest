import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../AppContext";
import { products } from "../constants/productsData";

const Filters = () => {
  const {
    selectedCat,
    setSelectedCat,
    setFilteredProducts,
    selectedPrice,
    setSelectedPrice,
    ratings,
    setRatings,
    setValChecked
  } = useContext(AppContext);

  const tagRef = useRef();
  const rateRef = useRef();

  const selFashion = useRef();
  const selBeauty = useRef();
  const selDecor = useRef();
  const selElec = useRef();

  const unCheck = (item) => {
    item.checked = false;
  };

  // useEffect(() => {

  //   if (valChecked === "fashion")  {selFashion.current.click();
  //     selBeauty.current.checked = false;
  //     selDecor.current.checked = false;
  //     selElec.current.checked = false;
  //   }
  // if (valChecked === "beauty")  {selBeauty.current.click();
  //   selFashion.current.checked = false;
  //     selDecor.current.checked = false;
  //     selElec.current.checked = false;
  //   }
  // if (valChecked === "electronics")  {selElec.current.click();
  //     selBeauty.current.checked = false;
  //     selDecor.current.checked = false;
  //     selFashion.current.checked = false;
  //   }
  // if (valChecked === "decor")  {selDecor.current.click();
  //     selBeauty.current.checked = false;
  //     selFashion.current.checked = false;
  //     selElec.current.checked = false;
  //   }

  // }, [valChecked]);

  // Clear All Filters

  const handleClearAll = () => {
    setSelectedCat([]); // clearing all selected categories
    setSelectedPrice([]); // clearing all selected prices
    setRatings(); // clearing ratings
    setValChecked("All")
    const elements = document.getElementsByTagName("input");
    tagRef.current = Array.from(elements);
    tagRef.current.forEach(unCheck); // unchecking all selected checkboxes
  };

  // Category Filter

  const handlecategory = (e) => {
    const { value, checked } = e.target;

    if (selectedCat.includes(value)) {
      let filters = selectedCat.filter((el) => el !== value);
      setSelectedCat(filters);
    } else {
      setSelectedCat([...selectedCat, value]);
      console.log(selectedCat);
    }
  };

  // Price Filter

  const handlePrice = (e) => {
    const { value, checked } = e.target;

    if (selectedPrice.includes(value)) {
      let filters = selectedPrice.filter((p) => p !== value);
      setSelectedPrice(filters);
    } else {
      setSelectedPrice([...selectedPrice, value]);
      console.log(selectedPrice, "price");
    }
  };

  //Ratings Filter

  const handleRatings = (e) => {
    const { value } = e.target;
    setRatings();
    setRatings(value);

    let ratingArr = document.getElementsByName("rating");
    rateRef.current = Array.from(ratingArr);
    console.log(rateRef.current);

    const unRate = (item) => {
      if (item.value !== value) {
        item.checked = false;
      }
    };

    rateRef.current.forEach(unRate);
  };

  // useEffect

  useEffect(() => {
    filteredItems();
  }, [selectedCat, selectedPrice, ratings]);

  // FILTER FUNCTION

  const filteredItems = () => {
    // Filtering Category wise

    if (selectedCat.length) {
      let updatedList;

      let tempItems = selectedCat.map((selectedCategory) => {
        updatedList = products.filter(
          (item) => item.category === selectedCategory
        );
        console.log(updatedList, "updatedLIst");

        return updatedList;
      });
      let flat = tempItems.flat();

      setFilteredProducts(flat);

      // prices

      if (selectedPrice.length) {
        console.log("price on");
        let tempPriceItems = selectedPrice.map((itemPrice) => {
          let priceList;

          if (itemPrice === "500") {
            priceList = flat.filter((item) => item.price < 500);
            console.log(priceList, "priceList");
          }
          if (itemPrice === "1000") {
            priceList = flat.filter(
              (item) => item.price >= 500 && item.price < 1000
            );
            console.log(priceList, "priceList");
          }
          if (itemPrice === "5000") {
            priceList = flat.filter(
              (item) => item.price >= 1000 && item.price < 5000
            );
            console.log(priceList, "priceList");
          }
          if (itemPrice === "10000") {
            priceList = flat.filter((item) => item.price > 5000);
            console.log(priceList, "priceList");

          }

          return priceList;
        });
        

        let flatAgain = tempPriceItems.flat();

        setFilteredProducts(flatAgain);

        // cat && price && ratings

        if (selectedPrice.length && ratings) {
          console.log(ratings);
          let pros = flatAgain.filter((item) => {
            let r = parseFloat(item.rating) >= parseFloat(ratings);
            console.log(item.rating, ratings, r, "item.ratings, ratings, R");
            return r;
          });
          console.log(pros, "pros");
          setFilteredProducts([...pros]);
        }
      }

      // cat && ratings
      if (ratings && selectedPrice.length === 0) {
        console.log(ratings);
        let lis = flat.filter((item) => {
          let r = parseFloat(item.rating) >= parseFloat(ratings);
          console.log(item.rating, ratings, r, "item.ratings, ratings, R");
          return r;
        });
        console.log(lis, "lis");

        setFilteredProducts([...lis]);

        // cat && ratings && price

        if (ratings && selectedPrice.length) {
          console.log("price on");
          let tempPriceRateItems = selectedPrice.map((itemPrice) => {
            let priceList;

            if (itemPrice === "500") {
              priceList = lis.filter((item) => item.price < 500);
              console.log(priceList, "priceList");
            }
            if (itemPrice === "1000") {
              priceList = lis.filter(
                (item) => item.price >= 500 && item.price < 1000
              );
            }
            if (itemPrice === "5000") {
              priceList = lis.filter(
                (item) => item.price >= 1000 && item.price < 5000
              );
            }
            if (itemPrice === "10000") {
              priceList = lis.filter((item) => item.price > 5000);
            }

            return priceList;
          });

          let flatOnceAgain = tempPriceRateItems.flat();

          setFilteredProducts(flatOnceAgain);
        }
      }
    } else {
      setFilteredProducts([...products]);
    }
  };

  return (
    <aside className="w-full md:w-1/5 border-b bg-slate-100 border-slate-300 pb-2 md:pb-0 md:border-none">
      {" "}
      {/* filter container */}
      <div className="flex font-semibold justify-between mt-5 pl-5 pb-3 border-slate-300 border-b">
        <span>FILTERS</span>
        <span
          className="text-sm pt-1 text-slate-500 cursor-pointer mr-4 hover:text-slate-700"
          onClick={handleClearAll}
        >
          Clear All
        </span>
      </div>{" "}
      {/* filter heading */}
      <div className="flex md:flex-col justify-evenly md:gap-3 py-2 px-5">
        {" "}
        {/* all filter wrapper */}

        {/* CATEFORIES filter */}
        <span className="text-xs font-semibold text-red-600 mb-[-0.5rem] pt-2 md:pt-0">* Select a category first</span>
        <div className="flex flex-col gap-2 md:text-sm text-[11px] pt-2">
          <span className="flex flex-col font-semibold">Categories</span>
          <label htmlFor="fashion">
            <input
              type="checkbox"
              onChange={(e) => handlecategory(e)}
              value={"fashion"}
              name="fashion"
              id="fashion"
              ref={selFashion}
            />{" "}
            Fashion
          </label>
          <label htmlFor="electronics">
            <input
              type="checkbox"
              onChange={(e) => handlecategory(e)}
              value={"electronics"}
              name="electronics"
              id="electronics"
              ref={selElec}
            />{" "}
            Electronics
          </label>
          <label htmlFor="decor">
            <input
              type="checkbox"
              onChange={(e) => handlecategory(e)}
              value={"decor"}
              name="decor"
              id="decor"
              ref={selDecor}
            />{" "}
            Decor
          </label>
          <label htmlFor="beauty">
            <input
              type="checkbox"
              onChange={(e) => handlecategory(e)}
              value={"beauty"}
              name="beauty"
              id="beauty"
              ref={selBeauty}
            />{" "}
            Beauty
          </label>
        </div>
        {/* PRICE filter */}
        <div className="flex flex-col gap-2 md:text-sm text-[11px] pt-2">
          <p className="flex flex-col font-semibold">Price</p>
          <label htmlFor="less500">
            <input
              type="checkbox"
              onChange={(e) => handlePrice(e)}
              value={"500"}
              name="price"
              id="less500"
            />{" "}
            {"<"} ₹500
          </label>
          <label htmlFor="500-1000">
            <input
              type="checkbox"
              onChange={(e) => handlePrice(e)}
              value={"1000"}
              name="price"
              id="500-1000"
            />{" "}
            ₹500 - ₹999
          </label>
          <label htmlFor="1000-5000">
            <input
              type="checkbox"
              onChange={(e) => handlePrice(e)}
              value={"5000"}
              name="price"
              id="1000-5000"
            />{" "}
            ₹1000 - ₹4999
          </label>
          <label htmlFor="5000-10000">
            <input
              type="checkbox"
              onChange={(e) => handlePrice(e)}
              value={"10000"}
              name="price"
              id="5000-10000"
            />{" "}
            {">"} ₹5000
          </label>
        </div>
        {/* RATINGS filter */}
        <div className="flex flex-col gap-2 md:text-sm text-[11px] pt-2">
          <p className="flex flex-col font-semibold">Ratings</p>
          <label htmlFor="fourAbove">
            <input
              type="checkbox"
              value={"4"}
              name="rating"
              id="fourAbove"
              onClick={(e) => handleRatings(e)}
            />{" "}
            4★ & above
          </label>
          <label htmlFor="threeAbove">
            <input
              type="checkbox"
              value={"3"}
              name="rating"
              id="threeAbove"
              onClick={(e) => handleRatings(e)}
            />{" "}
            3★ & above
          </label>
          <label htmlFor="twoAbove">
            <input
              type="checkbox"
              value={"2"}
              name="rating"
              id="twoAbove"
              onClick={(e) => handleRatings(e)}
            />{" "}
            2★ & above
          </label>
          <label htmlFor="oneAbove">
            <input
              type="checkbox"
              value={"1"}
              name="rating"
              id="oneAbove"
              onClick={(e) => handleRatings(e)}
            />{" "}
            1★ & above
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
