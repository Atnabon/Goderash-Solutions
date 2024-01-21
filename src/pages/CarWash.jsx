import { Button } from "@/components/ui/button";
import b from "../assets/b.png";
import styles from "../style";
import { show, rote } from "../assets";
import Fuel1 from "./Fuel1";
import Footer from "@/components/Footer";

const CarWash = () => {
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
      <Fuel1 />
      <h1 className="text-6xl w-screen ml-12    mt-10 text-secondary font-extrabold">
        Select Your Fuel Types
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-14 mx-5">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/${service.slug}`}
            className="flex flex-col items-center justify-center text-black"
          >
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-bold text-black">
                  Price: {service.price}
                </span>
              </div>
              <Button
                onClick={() => handleOrderClick(service.slug)}
                className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-full shadow-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out"
              >
                Place Order
              </Button>
            </div>
          </Link>
        ))}
      </div>

      <div className=" mt-24">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default CarWash;
