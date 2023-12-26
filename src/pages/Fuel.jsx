import { Button } from "@/components/ui/button";
import b from "../assets/b.png";
import styles from "../style";
import { show, rote, c1, c2 } from "../assets";
import Fuel1 from "./Fuel1";
import Fuel2 from "./Fuel2";
import Fuel3 from "./Fuel3";

export default function Fuel() {
  return (
    <div className="bg-white ">
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
        <div className="relative flex flex-col items-center justify-between px-10 sm:flex-row sm:items-start">
          {/*main*/}
          <main className="flex mt-32 flex-col items-center text-center mb-10 pt-4">
            <h2 className="text-6xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
              Save time, every time you refuel
            </h2>
            <p className="text-3xl text-white mb-8">
              Fuel delivery <span className="text-amber-400">Order Now</span>{" "}
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
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="space-y-10">
        <Fuel1 />
        <Fuel2 />
        <Fuel3 />
      </div>
      <div className="w-full h-full">
        <h1 className="text-6xl font-bold text-black ml-6">
          <span className="text-secondary">Get ready</span> to refuel
        </h1>
        <div className="flex flex-col lg:flex-row items-start gap-10 justify-start">
          <div className="">
            <img src={c1} alt="arrow-up" width={4500} height={350} />
            <div className="mb-4">
              <h1>Park outdoors</h1>
              <p>
                We can only make fuel deliveries to vehicles parked outdoors.
                Please make sure that you’re safely parked, and that your fuel
                cap is unlocked and accessible.
              </p>
            </div>
          </div>
          <div className="">
            <img src={c2} alt="arrow-up" width={700} height={500} />
            <div>
              <h1>Leave your fuel cap open</h1>
              <p>
                Don’t worry – it’s completely safe to leave your fuel cap
                unlocked (and there’s no need to leave your doors unlocked). In
                fact, many manufacturers now fit fuel caps that can’t be locked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}