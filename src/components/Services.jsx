import React from "react";

const Services = ({ name, title, img }) => {
  return (
    <div className="relative flex items-center justify-center h-auto hover:shadow-2xl">
      <div className="flex flex-wrap grid-cols-3 md:flex-row items-center h-96 w-80 justify-center">
        <div className="flex flex-col w-auto h-auto ">
          <div
            className={` font-sans border-1 shadow-md shadow-white  items-center justify-center text-white py-4 px-6 rounded-[20px] `}
          >
            <img
              src={img}
              alt={name}
              className={`w-[80%] h-[60%] md:w-[50%] ml-16 mb-10 md:h-auto md:mb-0 md:mr-4 rounded-[20px]`}
            />
            <div>
              <p className="mt-11 leading-6  ">{title}</p>
            </div>
            <h1 className="mt-11 leading-6 font-medium text-2xl">{name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
