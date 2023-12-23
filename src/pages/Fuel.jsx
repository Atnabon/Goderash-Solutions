import { fuel1 } from "../assets";

import styles from "../style";

const Fuel = () => {
  return (
    <div>
      <div className="absolute inset-0">
        <img
          alt="Background"
          className="w-full h-full object-cover animate-pulse"
          height="2048"
          src={fuel1}
          style={{
            aspectRatio: "581/2048",
            objectFit: "cover",
          }}
          width="581"
        />
      </div>
      <main className="flex mt-32 flex-col items-center text-center mb-10 pt-4">
        <h2 className="text-6xl font-bold text-white mb-4">
          We give you the time to do the things that matter
        </h2>
        <p className="text-xl text-white mb-8">
          Fuel delivery and time-saving vehicle services
        </p>
        <div
          className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
        >
          <div
            className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
          >
            {/* <div className={`${styles.flexStart} flex-row `}>
                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                  <span className="text-gradient">Get</span>
                </p>
                <img
                  src={arrowUp}
                  alt="arrow-up"
                  className="w-[23px] h-[23px] object-contain"
                />
              </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fuel;
