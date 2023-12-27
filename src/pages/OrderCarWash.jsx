import React, { useEffect, useState } from "react";
import axios from "axios"; // Add this line

const OrderCarWash = () => {
  const [formData, setFormData] = useState({
    name: "",
    car_type: "",
    delivery_address: "",
    typeofcarwash: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/base/user/carwashorder/",
        formData
      );

      setFormData({
        name: "",
        car_type: "",
        delivery_address: "",
        typeofcarwash: "",
        quantity: "",
      });

      alert("Order added successfully!");
      console.log("Car wash order placed successfully!", response.data);
    } catch (error) {
      console.error("Error placing car wash order:", error.response);
    }
  };

  return (
    <div className="container mx-auto mt-10 bottom-6 -translate-y-7">
      <h1 className="text-4xl font-bold mb-6">CarWash Delivery Order</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="car_type"
            className="block text-sm font-medium text-gray-600"
          >
            Car Type
          </label>
          <input
            id="car_type"
            name="car_type"
            value={formData.car_type}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          ></input>
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
            htmlFor="typeofcarwash"
            className="block text-sm font-medium text-gray-600"
          >
            Select a wash type
          </label>
          <input
            id="typeofcarwash"
            name="typeofcarwash"
            value={formData.typeofcarwash}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            {/* <option value="">Select a wash type</option>
            <option value="classic-clean">Classic Clean</option>
            <option value="classic-clean-interior">
              Classic Clean + Interior
            </option>
            <option value="new-pressure-wash">New Pressure Wash</option>
            <option value="premium-wash">Premium Wash + Sanitization</option> */}
          </input>
        </div>

        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-600"
          >
            Number Of Caars
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
            htmlFor="delivery_address"
            className="block text-sm font-medium text-gray-600"
          >
            Address
          </label>
          <input
            id="delivery_address"
            name="delivery_address"
            value={formData.delivery_address}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        {/* <div className="mb-4">
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
        </div> */}
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
