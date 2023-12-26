import styles from "../style";
import { FuelDelivery, imagefuely } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Fuel2 = () => {
  const checklist = [
    { text: "Save time and beat the queue", isChecked: true },
    { text: "24/7 petrol and diesel delivery", isChecked: true },
    {
      text: "Same price as the petrol station, and no delivery fees",
      isChecked: true,
    },
    { text: "Contactless – order and pay on the app", isChecked: true },
  ];
  return (
    <div className="w-full min-h-screen bg-white text-black flex space-y-px">
      <div className="bg-white flex flex-col md:flex-row space-y-px mt-20 ">
        <img
          alt="Background"
          className="w-full md:w-[450px] h-[400px] md:mb-0 translate-x-14 "
          src={imagefuely}
        />

        <img
          alt="Background"
          className="w-full md:w-[450px] h-[400px] mr-96 -translate-x-14 z-[1000] overflow-visible "
          src={FuelDelivery}
        />
      </div>
      <div>
        <div className="flex flex-col justify-center items-center w-screen h-screen  bg-gray-50  hover:border-x-white hover:shadow-sm translate-x-32 ">
          <h1 className=" text-black text-4xl font-bold font-poppins -translate-x-72  ">
            We’ll keep you <span className=" text-gradient">moving</span>
          </h1>
          <ul className="list-disc -translate-x-36 font-poppins text-md translate-y-3">
            {checklist.map((item, index) => (
              <li
                key={index}
                className={`relative ${item.isChecked ? "text-black" : ""}`}
              >
                {item.isChecked && (
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="absolute left-[-1.5rem] top-[0.5rem] rounded-full bg-secondary"
                  />
                )}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fuel2;
