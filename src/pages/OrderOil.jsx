import { Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const OrderOil = () => {
  const [formData, setFormData] = useState({
    name: "",
    vehicleType: "",
    deliveryAddress: "",
    enginesize: "",
    typeofoil: "",
    quantity: "",
    arrrivaltime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission, e.g., send data to backend
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto mt-10 bottom-6 -translate-y-7">
      <h1 className="text-4xl font-bold mb-6 ">Oil Delivery Order</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="vehicleType"
            className="block text-sm font-medium text-gray-600"
          >
            Vehicle Type
          </label>
          <input
            type="text"
            id="vehicleType"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="tyresize"
            className="block text-sm font-medium text-gray-600"
          >
            What is your engine size ?
          </label>
          <input
            type="number"
            id="enginesize"
            name="enginesize"
            value={formData.enginesize}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
          <div>
            <p className=" text-lg text-green-500">
              To provide you with accurate Price we need your engine size if you
              are not sure we show you the price range
            </p>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="batteryType"
            className="block text-sm font-medium text-gray-600"
          >
            Select Oil Type
          </label>
          <select
            id="typeofoil"
            name="typeofoil"
            value={formData.typeofoil}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="">Select Your Oil</option>
            <option value="mobil1">Mobil 1</option>
            <option value="mobilsuper">Mobil Super 3000</option>
            <option value="mobilesuper2000"> MObil super 2000</option>
          </select>
          <p className=" text-secondary"> what does it include ?</p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-600"
          >
            Number of Oil
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="deliveryAddress"
            className="block text-sm font-medium text-gray-600"
          >
            Delivery Address
          </label>
          <input
            id="deliveryAddress"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="arrivaltime"
            className="block text-sm font-medium text-gray-600"
          >
            Select Arrival Day and Time
          </label>
          <input
            type="time"
            id="arrivaltime"
            name="arrivaltime"
            value={formData.arrivaltime}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <Link
          to={"/orderdetails"}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900 justify-center items-center"
        >
          Place Order
        </Link>
      </form>
    </div>
  );
};

export default OrderOil;
