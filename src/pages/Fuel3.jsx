import styles from "../style";
import Stats from "./Stats";
const Fuel3 = () => {
  return (
    <div className="w-screen h-screen mt-10 space-y-24 bg-slate-100 ">
      <div className=" ml-5 text-5xl font-poppins font-extrabold">
        Same price as the petrol station, <br />
        <span className=" text-secondary font-poppins font-extrabold">
          with Go Derash delivery
        </span>
      </div>
      <div className="mr-20 ml-20 mt-4 mb-4 bg-white">
        <Stats />
      </div>
    </div>
  );
};

export default Fuel3;
