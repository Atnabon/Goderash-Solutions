// Services.js
import React from "react";
import styles from "./Services.module.css";

const Services = ({ content, name, title, img }) => {
  return (
    <div className="relative flex items-center  justify-center">
      <div className="flex flex-wrap grid-cols-3  md:flex-row items-center h-96 w-80 justify-center ">
        <div className="flex flex-col">
          <p className="md:h-auto mt-11 font-sans md:mb-0 md:mr-4 font-normal text-[18px] leading-[32.4px] text-white my-10"></p>
          <div className="flex flex-col font-sans">
            <h4 className="font-semibold text-[30px] justify-center items-center text-white">
              {name}
            </h4>
          </div>
          <div
            className={`absolute inset-1 font-sans sm:block hidden border-1 shadow-md shadow-white bg-black w-full h-full items-center justify-center text-white py-4 px-6 rounded-[20px] ${styles.overlay} transition-all`}
          >
            <img
              src={img}
              alt={name}
              className={`w-[80%] h-[60%] md:w-[50%] ml-16 mb-10 md:h-auto md:mb-0 md:mr-4 rounded-[20px] ${styles.image} transition-transform transform hover:scale-105`}
            />
            <h1 className=" mt-11 font ">{title}</h1>
            <h1 className=" mt-11 text-2xl">{name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
