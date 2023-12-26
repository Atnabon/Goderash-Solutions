import { Button } from "@/components/ui/button";
import b from "../assets/b.png";
import styles from "../style";
import { show, rote, c1, c2 } from "../assets";
import Fuel1 from "./Fuel1";
import Fuel2 from "./Fuel2";
import Fuel3 from "./Fuel3";

export default function Fuel() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative bg-[#011730] overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Background"
            className="w-full h-full object-cover"
            height="2048"
            src={b}
            style={{
              aspectRatio: "581/2048",
              objectFit: "cover",
            }}
            width="581"
          />
        </div>
        <div className="relative flex flex-col items-center justify-between px-10">
          <main className="flex mt-8 md:mt-32 flex-col items-center text-center mb-10 pt-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Save time, every time you refuel
            </h2>
            <p className="text-xl md:text-3xl text-white mb-8">
              Fuel delivery <span className="text-amber-400">Order Now</span>
            </p>
            <div
              className={`${styles.flexCenter} w-32 md:w-[140px] h-32 md:h-[140px] rounded-full p-2 cursor-pointer`}
            >
              <div
                className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
              >
                <img
                  src={rote}
                  alt="arrow-up"
                  className="w-full h-full object-contain"
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

      <div className="w-full space-y-10 md:space-x-10 md:flex md:items-start md:justify-start">
        <div className="w-full md:w-1/2 mt-10 md:ml-1 lg:ml-9 sm:ml-3 md:mr-5 lg:mr-3">
          <img
            src={c1}
            alt="arrow-up"
            className="w-full h-auto object-cover -translate-x-3"
          />
          <div className="mt-5">
            <h1 className="font-poppins text-2xl md:text-4xl leading-[26.58px] text-slate-900 font-extrabold">
              Park outdoors
            </h1>
            <p className="mt-4 font-serif text-base">
              We can only make fuel deliveries to vehicles parked outdoors.
              Please make sure that you’re safely parked, and that your fuel cap
              is unlocked and accessible.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={c2}
            alt="arrow-up"
            className="w-full h-auto object-cover -translate-x-9"
          />
          <div className="mt-4">
            <h1 className="font-poppins text-2xl md:text-4xl leading-[26.58px] text-slate-900 font-extrabold">
              Leave your fuel cap open
            </h1>
            <p className="mt-4 font-serif text-base">
              Don’t worry – it’s completely safe to leave your fuel cap unlocked
              (and there’s no need to leave your doors unlocked). In fact, many
              manufacturers now fit fuel caps that can’t be locked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
