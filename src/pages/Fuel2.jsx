import styles from "../style";
import { FuelDelivery, imagefuely } from "../assets";

const Fuel2 = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black flex space-y-px">
      <div className="bg-white flex flex-col md:flex-row space-y-px mt-20 ">
        <img
          alt="Background"
          className="w-full md:w-[450px] h-[400px] md:mb-0 ml-1"
          src={imagefuely}
        />

        <img
          alt="Background"
          className="w-full md:w-[450px] h-[400px] mr-96"
          src={FuelDelivery}
        />
      </div>
      <div>
        <div className="flex flex-col justify-center items-center mt-20 mr-36 w-screen h-screen overflow-hidden bg-slate-100 ">
          <ul className="list-disc">
            <li>Save time and beat the queues</li>
            <li>24/7 petrol and diesel delivery</li>
            <li>Same price as the petrol station, and no delivery fees</li>
            <li>Contactless – order and pay on the app</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fuel2;
