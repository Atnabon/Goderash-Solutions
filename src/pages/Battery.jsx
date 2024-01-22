import { Button } from "@/components/ui/button";
import b from "../assets/b.png";
import styles from "../style";
import { show, rote } from "../assets";
import Fuel1 from "./Fuel1";
import Footer from "@/components/Footer";
import Battery1 from "./Battery1";
import Battery2 from "./Battery2";
import Battery3 from "./Battery3";
import Battery4 from "./Battery4";
import Battery5 from "./Battery5";
import Battery6 from "./Battery6";

const Battery = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative bg-[#011730] overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Background"
            className="w-full h-full object-cover "
            height="2048"
            src={b}
            style={{
              aspectRatio: "581/2048",
              objectFit: "cover",
            }}
            width="581"
          />
        </div>
        <div className="relative  flex flex-col items-center justify-between px-10">
          {/*main*/}
          <main className="flex mt-32 flex-col items-center text-center mb-10 pt-4">
            <h2 className="text-6xl font-bold text-white mb-4">
              Save time, every time you refuel
            </h2>
            <p className="text-3xl text-white mb-8">
              Fuel delivery <span className=" text-amber-400"> Order Now</span>{" "}
            </p>
            <div
              className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full  p-[2px] cursor-pointer `}
            >
              <div
                className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
              >
                <img
                  src={rote}
                  alt="arrow-up"
                  className="w-[160px] h-[160px]  object-contain"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Battery1 />
      <Battery2 />
      <Battery3 />
      <Battery4 />
      <Battery5 />
      <Battery6 />
      <div className="mt-24">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Battery;
