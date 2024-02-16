import React, { useEffect, useState } from "react";
import { products } from "../constants/productsData";
import PopularProduct from "./PopularProduct";
import { IconButton } from "@mui/material";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

const Popular = () => {

  const [cardWidthPlusGap, setCardWidthPlusGap] = useState(220);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  
  const handleResize = (width) => {
    // setWindowWidth(window.innerWidth)
    if (width <= 768) setCardWidthPlusGap(164);
  };

  useEffect(() => {

    console.log("x");

    console.log("resize","width: ", window.innerWidth)

    window.addEventListener('resize', handleResize(window.innerWidth));

    // return () => {
    //   window.removeEventListener('resize');
    // }

  }, []);

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick("right");
    }, 1250);

    return () => clearInterval(interval);
  });

  const handleClick = (direction) => {
        if (window.innerWidth > 768 && cardWidthPlusGap === 164){ direction === "right"
        ? setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        : setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
} 
        else if (window.innerWidth <= 768 && window.innerWidth > 640 && cardWidthPlusGap === 164){ direction === "right"
        ? setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
        : setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
} 
      else if ( window.innerWidth <= 640 && window.innerWidth > 425 && cardWidthPlusGap === 164){ direction === "right"
        ? setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
        : setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4); // 4 slides hide in total //
} 
      else if ( window.innerWidth <= 425 && cardWidthPlusGap === 164){ direction === "right"
        ? setSlideIndex(slideIndex < 6 ? slideIndex + 1 : 0)
        : setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 6); // 6 slides hide in total //
} 
 else   
        { direction === "right"
        ? setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        : setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
}    
  };

  return (
    <div className="flex w-full gap-[20px] md:pt-14 pt-10 p-1 md:p-8 relative md:pl-6 pl-2 overflow-hidden scroll-smooth">
      <p className="flex font-semibold absolute md:top-5 top-2 md:left-6 left-2 z-10">
        POPULAR PRODUCTS
      </p>

      <div
        className="flex absolute top-[45%] md:left-2 left-0 rounded-full opacity-80 ml-5 bg-slate-300 z-10"
        onClick={() => handleClick("left")}
      >
        <IconButton>
          <ChevronLeftRounded />
        </IconButton>
      </div>

      <div
        className="flex md:gap-[20px] gap-3"
        style={{
          transition: "all 1s ease",
          transform: `translateX(-${slideIndex*parseInt(cardWidthPlusGap)}px)`, //wrapper
        }}
      >
        {products.map((item) => (
          <>
            {item.status === "popular" && (
              <PopularProduct item={item} key={item.id} />
            )}
          </>
        ))}
      </div>
      <div
        className="flex absolute top-[45%] md:right-2 right-0 rounded-full opacity-80 mr-5 bg-slate-300 z-10"
        onClick={() => handleClick("right")}
      >
        <IconButton>
          <ChevronRightRounded />
        </IconButton>
      </div>
    </div>
  );
};

export default Popular;
