import b from "../assets/b.png";
import styles from "../style";
import { show, rote, c1, c2 } from "../assets";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Tyre1 from "./Tyre1";
import Tyre2 from "./Tyre2";
import Tyre3 from "./Tyre3";

const Tyre = () => {
  const history = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/tyre/user/tyre/listtyrecategory/"
        );
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    console.log("Image URL:", services.image);

    fetchServices();
  }, []);

  const handleOrderClick = (serviceSlug) => {
    history(`/order/${serviceSlug}`);
  };

  return (
    <div className=" bg-white overflow-hidden">
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

      <Tyre1 />
      <Tyre2 />
      <div className="w-full space-y-10 md:space-x-10 md:flex md:items-start md:justify-start">
        <div className="w-full md:w-1/2 mt-10 md:ml-1 lg:ml-9 sm:ml-3 md:mr-5 lg:mr-3">
          <h1 className="text-4xl font-extrabold text-black mt-12  w-screen">
            Get ready for your tyres
          </h1>
          <img
            src={c1}
            alt="arrow-up"
            className="w-full h-auto object-cover -translate-x-3"
          />
          <div className="mt-5">
            <h1 className="font-poppins text-2xl md:text-4xl leading-[26.58px] text-slate-900 font-extrabold">
              Park safely
            </h1>
            <p className="mt-4 font-serif text-base mt-10">
              We can only make fuel deliveries to vehicles parked outdoors.
              Please make sure that you’re safely parked, and that your fuel cap
              is unlocked and accessible.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-20">
          <img
            src={c2}
            alt="arrow-up"
            className="w-full h-auto object-cover -translate-x-9"
          />
          <div className="mt-4">
            <h1 className="font-poppins text-2xl md:text-4xl leading-[26.58px] text-slate-900 font-extrabold">
              Stay close
            </h1>
            <p className="mt-4 font-serif text-base">
              Don’t worry – it’s completely safe to leave your fuel cap unlocked
              (and there’s no need to leave your doors unlocked). In fact, many
              manufacturers now fit fuel caps that can’t be locked.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        {" "}
        <Footer />
      </div>
      <h1 className="text-6xl w-screen ml-12    mt-10 text-black font-extrabold">
        Select Your Tyre Brand
      </h1>
      <div className="grid grid-cols-1 w-screen overflow-hidden md:grid-cols-2 lg:grid-cols-4 mt-14 gap-7 ml-5">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/${service.slug}`}
            className="text-center text-black"
          >
            <div className=" bg-sky-500  p-4 overflow-hidden border  hover:bg-cyan-400 hover:duration-1000 hover:gap-y-5 hover:opacity-2 rounded-md cursor-pointer transition-transform transform hover:scale-105">
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  className="justify-center items-center ml-1"
                  width={250}
                  height={250}
                />
              )}
              <div className="mx-auto h-12 w-12 text-black" />
              <h3 className="text-lg leading-6 font-medium">{service.name}</h3>
              <h3 className="mx-auto text-lg leading-6 font-medium ">
                <span className=" text-black text-xl "> Price</span>{" "}
                {service.price}
              </h3>

              <p className="text-base">{service.description}</p>
              <Button
                onClick={() => handleOrderClick(service.slug)}
                className="bg-lime-900 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
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

export default Tyre;
