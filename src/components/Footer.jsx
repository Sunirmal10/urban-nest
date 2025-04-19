import {
  FacebookOutlined,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { footerData, socialIcons } from "../constants/SliderData";
import { Link } from "react-router-dom";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className="flex flex-col w-full mt-4 p-5 sm:p-7 md:p-12 bg-slate-950 text-slate-100 md:text-xs text-[10px]">
      <div className="flex flex-col md:flex-row sm:gap-10 gap-7 py-5 md:py-10">
        <div className="flex w-full sm:w-2/5 flex-col justify-start items-start gap-6">
          <div className="flex items-center text-lg cursor-pointer">
            <div className="text-green-700 font-bold">Urban</div>
            <div className="text-orange-400 font-semibold">Nest</div>
          </div>
          <div className="flex w-full">
            Your very own online comfort shopping platform for everything.
          </div>
          <div className="ml-[-10px] w-full justify-center sm:justify-start flex gap-2">
            {socialIcons.map((icon) => (
              <IconButton key={icon.id}>{icon.icon}</IconButton>
            ))}

           
          </div>
        </div>
        <div className="flex w-full justify-evenly items-start gap-2 scale-[0.9] sm:scale-1">
          {footerData.map((item) => (
            <div
              className="flex flex-col justify-evenly md:gap-5 gap-3"
              key={item.id}
            >
              <h6 className="sm:font-semibold text-xs md:text-sm">
                {item.title}
              </h6>
              <Link to={"#"}>{item.cat1 && item.cat1}</Link>
              <Link to={"#"}>{item.cat2 && item.cat2}</Link>
              <Link to={"#"}>{item.cat3 && item.cat3}</Link>
              <Link to={"#"}>{item.cat4 && item.cat4}</Link>
              <Link to={"#"}>{item.cat5 && item.cat5}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="flex sm:pt-10 pt-5">
          © {year} UrbanNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
