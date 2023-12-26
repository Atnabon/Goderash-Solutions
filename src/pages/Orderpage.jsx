import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  batter,
  bl,
  wheel,
  insurance,
  car,
  oil,
  tanker,
  fuel2,
  fuel1,
  splah,
  call,
} from "../assets";

function Orderpage() {
  const history = useNavigate();

  const handleOrderClick = (service) => {
    switch (service) {
      case "fuel":
        history("/order-fuel");
        break;
      case "carwash":
        history("/order-carwash");
        break;
      case "tyre":
        history("/order-tyre");
        break;
      case "battery":
        history("/order-battery");
        break;
      case "engineoil":
        history("/order-engineoil");
        break;
      case "emergance":
        history("/order-for-emergance");
        break;
      case "bolo":
        history("/apply-for--bolo");
        break;
      case "insurance":
        history("/apply-for-insurance");
        break;
      default:
        history("/");
    }
  };

  return (
    <div className="flex justify-center items-center py-16 bg-white border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-secondary mb-16">
          Wel Come To Order Page{" "}
          <span className=" cursor-not-allowed">Choose Your Seervices</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Fuel */}
          <Link to="/order-fuel" className="text-center text-black">
            <div className="bg-gray-100 p-4 rounded-md cursor-pointer transition-transform transform hover:scale-105">
              <img
                src={splah}
                alt="battery"
                className=" justify-center items-center ml-1 font-extrabold"
                width={250}
                height={150}
              />
              <div className="mx-auto h-12 w-12 text-black" />
              <h3 className=" text-lg leading-6 font-medium">Fuel</h3>
              <p className=" text-base">
                Download the app and start saving time with Goderash.
              </p>
              <Button
                onClick={() => handleOrderClick("general")}
                className=" bg-lime-900 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Place Order
              </Button>
            </div>
          </Link>

          {/* CarWash */}
          <Link to="/order-carwash" className="text-center text-black">
            <div className="bg-gray-100 p-4 rounded-md cursor-pointer transition-transform transform hover:scale-105">
              <img
                src={car}
                alt="battery"
                className=" justify-center items-center ml-14 mt-7 font-extrabold"
              />
              <div className="mx-auto h-12 w-12 text-black" />
              <h3 className="mt-5 text-lg leading-6 font-medium">CarWash</h3>
              <p className=" text-base">
                Open the app, anytime. Order and pay for a fuel delivery,
              </p>
              <Button
                onClick={() => handleOrderClick("general")}
                className=" bg-lime-900 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Place Order
              </Button>
            </div>
          </Link>

          {/* Tyre */}
          <Link to="/order-tyre" className="text-center text-black">
            <div className="bg-gray-100 p-4 rounded-md cursor-pointer transition-transform transform hover:scale-105">
              <div className="mx-auto h-12 w-12 text-black" />
              <img
                src={wheel}
                alt="battery"
                className=" justify-center items-center ml-14 font-extrabold"
              />
              <h3 className="mt-5 text-lg leading-6 font-medium">Tyre</h3>
              <p className="mt-2 text-base">
                Make sure your car is easily accessible (and don’t forget to
                open your
              </p>
              <Button
                onClick={() => handleOrderClick("general")}
                className=" bg-lime-900 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Place Order
              </Button>
            </div>
          </Link>

          {/* EngineOil */}
          <Link to="/order-engineoil" className="text-center text-black">
            <div className="bg-gray-100 p-4 rounded-md cursor-pointer transition-transform transform hover:scale-105">
              <div className="mx-auto h-12 w-12 text-black" />
              <img
                src={tanker}
                alt="battery"
                className=" justify-center items-center ml-14 font-extrabold"
              />
              <h3 className="mt-5 text-lg leading-6 font-medium">EngineOil</h3>
              <p className="mt-2 text-base">
                And we’re on our way. No queues, no hassle. Simpler. Smarter.
                Goderash.
              </p>
              <Button
                onClick={() => handleOrderClick("general")}
                className=" bg-lime-900 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Place Order
              </Button>
            </div>
          </Link>

          {/* Bolo */}
          <Link to="/apply-for--bolo" className="text-center text-black">
            <div className="bg-gray-100 p-4 rounded-md cursor-pointer transition-transform transform hover:scale-105">
              <img
                src={insurance}
                alt="battery"
                className=" justify-center items-center ml-14 font-extrabold"
              />
              <div className="mx-auto h-12 w-12 text-black" />
              <h3 className="mt-5 text-lg leading-6 font-medium">Bolo</h3>
              <p className="mt-2 text-base">
                And we’re on our way. No queues, no hassle. Simpler. Smarter.
                Goderash.
              </p>
              <Button
                onClick={() => handleOrderClick("general")}
                className="bg-lime-900 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Place Order
              </Button>
            </div>
          </Link>

          {/* Insurance */}
          <Link to="/apply-for-insurance" className="text-center  text-black">
            <div className="bg-gray-100 p-4 disabled:pointer-events-auto rounded-md cursor-pointer transition-transform transform hover:scale-105">
              <img
                src={insurance}
                alt="battery"
                className=" justify-center items-center ml-14 font-extrabold"
              />
              <div className="mx-auto h-12 w-12 text-black" />
              <h3 className="mt-5 text-lg leading-6 font-medium">Insurance</h3>
              <p className="mt-2 text-base">
                And we’re on our way. No queues, no hassle. Simpler. Smarter.
                Goderash.
              </p>
              <Button
                onClick={() => handleOrderClick("general")}
                className="bg-lime-900 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Place Order
              </Button>
            </div>
          </Link>

          {/* Battery */}
          <Link to="/order-battery" className="text-center text-black">
            <div className="bg-gray-100 p-4 rounded-md cursor-pointer transition-transform transform hover:scale-105">
              <div className="mx-auto h-12 w-12 text-black" />
              <img
                src={batter}
                alt="battery"
                className=" justify-center items-center ml-14 font-extrabold"
              />
              <h3 className="mt-5 text-lg leading-6 font-medium">Battery</h3>
              <p className="mt-2 text-base">
                And we’re on our way. No queues, no hassle. Simpler. Smarter.
                Goderash.
              </p>
              <Button
                onClick={() => handleOrderClick("general")}
                className="bg-lime-900 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Place Order
              </Button>
            </div>
          </Link>

          {/* Emergance */}
          <Link to="/order-for-emergance" className="text-center text-black">
            <div className="bg-gray-100 p-4 rounded-md cursor-pointer transition-transform transform hover:scale-105">
              <img
                src={call}
                alt="battery"
                className=" justify-center items-center ml-14  font-extrabold"
              />
              <div className="mx-auto h-12 w-12 text-black" />
              <h3 className="mt-5 text-lg leading-6 font-medium">Emergance</h3>
              <p className=" text-base">
                And we’re on our way. No queues, no hassle. Simpler. Smarter.
                Goderash.
              </p>
              <Button
                onClick={() => handleOrderClick("general")}
                className="bg-lime-900 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Place Order
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Orderpage;
