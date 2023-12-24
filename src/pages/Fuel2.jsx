import styles from "../style";
import { FuelDelivery, imagefuely } from "../assets";

const Fuel2 = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black flex space-y-px">
      <div className="bg-white flex flex-col md:flex-row space-y-px mt-20 ">
        <img
          alt="Background"
          className="w-full md:w-[450px] h-[400px] md:mb-0 translate-x-1 "
          src={imagefuely}
        />

        <img
          alt="Background"
          className="w-full md:w-[450px] h-[400px] mr-96 -translate-x-20 "
          src={FuelDelivery}
        />
      </div>
      <div>
        <div className="flex flex-col justify-center items-center w-screen h-screen   bg-zinc-50 border-x-1 hover:border-x-white hover:border-yellow-700  hover:shadow-sm translate-x-32 ">
          <h1 className=" text-gradient text-6xl font-bold bg-slate-300 -translate-x-72  ">
            Go Derash...!
          </h1>
          <ul className="list-disc -translate-x-52 translate-y-6">
            <li>
              <span>Save time and beat the queue</span>s
            </li>
            <li>
              <span>24/7 petrol and diesel delivery</span>
            </li>
            <li>
              <span>
                Same price as the petrol station, and no delivery fees
              </span>
            </li>
            <li>
              <span>Contactless – order and pay on the app</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fuel2;
