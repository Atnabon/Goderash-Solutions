import { useState } from "react";

const OrderCarWash = () => {
  const [formData, setFormData] = useState({
    name: "",
    vehicleType: "",
    deliveryAddress: "",
    typeofcarwash: "",
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
      <h1 className="text-4xl font-bold mb-6">CarWash Delivery Order</h1>
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
            htmlFor="batteryType"
            className="block text-sm font-medium text-gray-600"
          >
            Select a wash type
          </label>
          <select
            id="typeofcarwash"
            name="typeofcarwash"
            value={formData.typeofcarwash}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="">Select a wash type</option>
            <option value="classic-clean">Classic Clean</option>
            <option value="interior">Classic Clean + interior</option>
            <option value="agm">New Pressure Wash</option>
            <option value="agm"> Premium Wash + Sanitisation</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-600"
          >
            Number Of Tyres
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900 justify-center items-center"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderCarWash;
