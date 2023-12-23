import styles from "../style";

import { FuelDelivery, imagefuely } from "../assets";

const Fuel1 = () => {
  return (
    <div className="w-screen min-h-full lg:h-full bg-white text-black flex ">
      <div className="w-full max-w-screen-md px-6 md:px-10 lg:px-16 flex flex-col items-start">
        <h2 className="text-7xl md:text-5xl mt-11 font-extrabold font-poppins mb-4">
          <span className=" text-secondary ">Petrol and diesel delivery</span>
          <br />
          <span className="text-black">in Ethiopia...!</span>
        </h2>
        <p className="text-black w-screen md:w-1/2 text-[20px] font-sans">
          Looking for a quicker, more convenient way to fill up? Go Derash’s got
          you covered. Get fuel delivery in Ethiopia, providing services across
          the country. Giving you the freedom to make the most of your precious
          time
        </p>
      </div>
      <br />
    </div>
  );
};

export default Fuel1;
