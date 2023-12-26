import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    <div className="flex justify-center items-center py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-black mb-16">
          Choose Your Seervices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Fuel */}
          <Link to="/order-fuel" className="text-center text-black">
            <div className="bg-gray-100 p-4 rounded-md cursor-pointer transition-transform transform hover:scale-105">
              <SmartphoneIcon className="mx-auto h-12 w-12 text-black" />
              <h3 className="mt-5 text-lg leading-6 font-medium">Fuel</h3>
              <p className="mt-2 text-base">
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
              <CalendarCheckIcon className="mx-auto h-12 w-12 text-black" />
              <h3 className="mt-5 text-lg leading-6 font-medium">CarWash</h3>
              <p className="mt-2 text-base">
                Open the app, anytime. Order and pay for a fuel delivery, car
                wash, oil or tyre change, or battery service.
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
              <CarIcon className="mx-auto h-12 w-12 text-black" />
              <h3 className="mt-5 text-lg leading-6 font-medium">Tyre</h3>
              <p className="mt-2 text-base">
                Make sure your car is easily accessible (and don’t forget to
                open your fuel cap if you’ve ordered a fuel delivery).
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
              <ThumbsUpIcon className="mx-auto h-12 w-12 text-black" />
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
              <ThumbsUpIcon className="mx-auto h-12 w-12 text-black" />
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
          <Link to="/apply-for-insurance" className="text-center text-black">
            <div className="bg-gray-100 p-4 rounded-md cursor-pointer transition-transform transform hover:scale-105">
              <ThumbsUpIcon className="mx-auto h-12 w-12 text-black" />
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
              <ThumbsUpIcon className="mx-auto h-12 w-12 text-black" />
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
              <ThumbsUpIcon className="mx-auto h-12 w-12 text-black" />
              <h3 className="mt-5 text-lg leading-6 font-medium">Emergance</h3>
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
        </div>

        {/* "Place Order" button */}
      </div>
    </div>
  );
}

function CalendarCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

function CarBattery(props) {
  return <svg></svg>;
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

export default Orderpage;
