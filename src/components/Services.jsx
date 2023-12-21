import React from "react";
import styles from "./Services.module.css"; // Import the CSS file for styling

const Services = ({ content, name, title, img }) => (
  <div
    className={` relative fized inset-0 bg-black   w-full h-full flex flex-col items-center justify-center text-white font-semibold py-4 px-6 rounded-[20px] transition-opacity duration-300 opacity-1 hover:opacity-100`}
  >
    <div className="flex md:flex-wrap items-center justify-center flex-wrap ">
      <img
        src={img}
        alt={name}
        className={`w-[80%] h-[60%] md:w-[50%]   md:h-auto md:mb-0 md:mr-4 object-cover rounded-[20px] ${styles.image}`}
      />
      <div className="flex flex-col ">
        <p className=" md:h-auto md:mb-0 md:mr-4 font-normal text-[18px] leading-[32.4px] text-white my-10">
          {content}
        </p>
        <div className="flex flex-col">
          <h4 className=" font-semibold text-[30px] justify-center items-center  text-white">
            {name}
          </h4>
        </div>
        <div
          className={`absolute inset-0 hover:space-y-10  hover:border-1 hover:shadow-md hover:shadow-white bg-black bg-opacity-100 w-full h-full flex flex-col items-center   justify-center text-white font-semibold   py-4 px-6 rounded-[20px] transition-opacity duration-800 opacity-0 hover:opacity-100`}
        >
          <img
            src={img}
            alt={name}
            className={`w-[80%] h-[60%] md:w-[50%] hover:scale-105 justify-center items-center hover:animate-spin hover:border-4 hover:shadow-md mb-10 md:h-auto md:mb-0 md:mr-4 object-cover rounded-[20px] ${styles.image}`}
          />
          <p>{title}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
