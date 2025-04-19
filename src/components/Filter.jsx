import React, { useContext, useEffect, useRef, useState } from "react";
import { products } from "../constants/productsData";
import { categories } from "../constants/SliderData";
import { AppContext } from "../AppContext";

const Filter = () => {
  const [selectedDropdownValue, setSelectedDropdownValue] = useState();
  const [selectedCatValue, setSelectedCatValue] = useState("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState("");

  const { filteredproducts, setFilteredProducts } =
    useContext(AppContext);

  const handlecategory = (e) => {
    let value = e.target.value.toLowerCase();

    if (selectedCatValue.includes(value)) {
      let filters = selectedCatValue.filter((el) => el !== value);
      setSelectedCatValue(filters);
    } else {
      setSelectedCatValue([...selectedCatValue, value]); // stores selected categories in array form
    }
  };

  const handlePrice = (e) => {
    setPrice(e.target.id);
  };

  const handleClearAll = () => {};



  const handleRatings = (e) => {
    setRatings(e.target.value);
  };

  useEffect(() => {
    filteredItems();
  }, [selectedCatValue, price, ratings]);

  const filteredItems = () => {

    let filteredPriceWise
    let filteredCategoryWise
    let filteredRatingsWise
    let filteredSortWise

    // Filtering Price wise
    if (price !== "") {
      filteredPriceWise = filteredproducts.filter((item) => {
        if (price === "less500") {
          return item.price < 500;
        } else if (price === "500-1000") {
          return item.price >= 500 && item.price < 1000;
        } else if (price === "1000-5000") {
          return item.price >= 1000 && item.price < 5000;
        } else if (price === "5000-10000") {
          return item.price >= 5000;
        } else if (price === "all") {
          return item.price >= 0;
        }
    
      
      })
      setFilteredProducts(filteredPriceWise);

      console.log(filteredproducts, "filteredProducts after price filter");
    };


        // Filtering Category wise

        if (selectedCatValue.length > 0) {
          let updatedList;
          let filteredProductsPerSelectedCategory = selectedCatValue.map(
            (selectedCategory) => {
              updatedList = products.filter(
                (item) => item.category === selectedCategory
              );
              return updatedList;
            }
          );
          filteredCategoryWise = filteredProductsPerSelectedCategory.flat();
          setFilteredProducts(filteredCategoryWise);
     
          console.log(filteredproducts, "filteredProducts after category filter");
        }

        // Filtering Ratings wise
        if (ratings !== "") {
          filteredRatingsWise = filteredproducts.filter(
            (item) => parseInt(item.rating) >= parseInt(ratings)
          );
          setFilteredProducts(filteredRatingsWise);
          console.log(filteredproducts, "filteredProducts after rating filter");
        }

        // Filtering Category and Price wise
        if (selectedCatValue.length > 0 && price !== "") {
          filteredCategoryWise = filteredproducts.filter((item) => {
            if (price === "less500") {
              return item.price < 500 && selectedCatValue.includes(item.category);
            } else if (price === "500-1000") {
              return (
                item.price >= 500 &&
                item.price < 1000 &&
                selectedCatValue.includes(item.category)
              );
            } else if (price === "1000-5000") {
              return (
                item.price >= 1000 &&
                item.price < 5000 &&
                selectedCatValue.includes(item.category)
              );
            } else if (price === "5000-10000") {
              return (
                item.price >= 5000 &&
                selectedCatValue.includes(item.category)
              );
            } else if (price === "all") {
              return selectedCatValue.includes(item.category);
            }
          });
          setFilteredProducts(filteredCategoryWise);
          console.log(
            filteredproducts,
            "filteredProducts after category and price filter"
          );
        }


      
    

  };

 

  return (
    <aside className="w-full md:w-1/5 border-b bg-slate-100 border-slate-300 px-2 pb-2 md:pb-0 md:border-none">
      {" "}
      {/* filter container */}
      <div className="flex font-semibold justify-between mt-5 pl-3 pb-3 border-slate-300 border-b">
        {" "}
        {/* filter title */}
        <h3>FILTERS</h3>
        <span
          className="text-sm pt-1 text-slate-500 cursor-pointer mr-2 hover:text-slate-700"
          onClick={handleClearAll}
        >
          Clear All
        </span>
      </div>
      {/* ALL the filters  */}
      {/* SORT filter */}
      {/* <section className="flex flex-col gap-2">
        <label // sort filter
          className="font-semibold mr-1 text-sm py-2"
          htmlFor="sort"
        >
          Sort by:
          <select
            id="sort"
            value={selectedDropdownValue}
            className="font-normal rounded-md"
            onChange={(e) => setSelectedDropdownValue(e.target.value)}
          >
            <option value="new">New</option>
            <option value="high-to-low">Price: High To Low</option>
            <option value="low-to-high">Price: Low To High</option>
            <option value="highest-rated">Highest Rated</option>
          </select>
        </label>
        <div></div>
      </section>
      <span>{selectedDropdownValue}</span> */}
      {/* category radio filter */}
      <section className="flex flex-col gap-2 md:text-sm text-[11px] pt-2 mb-4">
        <span className="flex flex-col md:text-sm font-semibold">
          Categories:
        </span>
        {categories.map((cat) => (
          <label
            htmlFor={cat.title}
            key={cat.id}
            className="flex justify-start items-center gap-1"
          >
            <input
              type="checkbox"
              className="mb-[2px] font-semibold"
              onChange={(e) => handlecategory(e)}
              value={cat.title}
              //  checked={selectedCatValue === cat.title}
              id={cat.title}
            />
            {cat.title}
          </label>
        ))}
      </section>
      <p>{selectedCatValue}</p>
      {/* PRICE filter  */}
      <div className="flex flex-col gap-2 md:text-sm text-[11px] pt-2">
        <p className="flex flex-col font-semibold">Price</p>
        <label htmlFor="all">
          <input
            type="radio"
            onChange={(e) => handlePrice(e)}
            value={"all"}
            name="price"
            id="all"
            defaultChecked
          />{" "}
          All Prices
        </label>
        <label htmlFor="less500">
          <input
            type="radio"
            onChange={(e) => handlePrice(e)}
            value={"500"}
            name="price"
            id="less500"
          />{" "}
          {"<"} ₹500
        </label>
        <label htmlFor="500-1000">
          <input
            type="radio"
            onChange={(e) => handlePrice(e)}
            value={"1000"}
            name="price"
            id="500-1000"
          />{" "}
          ₹500 - ₹999
        </label>
        <label htmlFor="1000-5000">
          <input
            type="radio"
            onChange={(e) => handlePrice(e)}
            value={"5000"}
            name="price"
            id="1000-5000"
          />{" "}
          ₹1000 - ₹4999
        </label>
        <label htmlFor="5000-10000">
          <input
            type="radio"
            onChange={(e) => handlePrice(e)}
            value={"10000"}
            name="price"
            id="5000-10000"
          />{" "}
          {">"} ₹5000
        </label>
      </div>
      <span>PRICE: {price}</span>
      {/* RATINGS filter */}
      <div className="flex flex-col gap-2 md:text-sm text-[11px] pt-2">
        <p className="flex flex-col font-semibold">Ratings</p>
        <label htmlFor="fourAbove">
          <input
            type="radio"
            value={"4"}
            name="rating"
            id="fourAbove"
            onClick={(e) => handleRatings(e)}
          />{" "}
          4★ & above
        </label>
        <label htmlFor="threeAbove">
          <input
            type="radio"
            value={"3"}
            name="rating"
            id="threeAbove"
            onClick={(e) => handleRatings(e)}
          />{" "}
          3★ & above
        </label>
        <label htmlFor="twoAbove">
          <input
            type="radio"
            value={"2"}
            name="rating"
            id="twoAbove"
            onClick={(e) => handleRatings(e)}
          />{" "}
          2★ & above
        </label>
        <label htmlFor="oneAbove">
          <input
            type="radio"
            value={"1"}
            name="rating"
            id="oneAbove"
            onClick={(e) => handleRatings(e)}
          />{" "}
          1★ & above
        </label>
      </div>
      <span>RATING: {ratings}</span>
    </aside>
  );
};

export default Filter;
