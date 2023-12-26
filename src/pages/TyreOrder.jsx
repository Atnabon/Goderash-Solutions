import { useState } from "react";

const TyreOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    vehicleType: "",
    deliveryAddress: "",
    tyresize: "",
    typeoftyre: "",
    numtyre: "",
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
      <h1 className="text-4xl font-bold mb-6">Tyre Delivery Order</h1>
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
            What is your tyre size ?
          </label>
          <input
            type="number"
            id="tyresize"
            name="tyresize"
            value={formData.tyresize}
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
            Select Your Tyre
          </label>
          <select
            id="typeoftyre"
            name="typeoftyre"
            value={formData.typeoftyre}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="">Select Your Tyre</option>
            <option value="standard">Bridgestone</option>
            <option value="primium">Kumho Tyre</option>
            <option value="agm"> Gooodyear</option>
            <option value="agm"> Michelin</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="numvehicle"
            className="block text-sm font-medium text-gray-600"
          >
            Number Of Tyres
          </label>
          <input
            type="number"
            id="numtyre"
            name="numtyre"
            value={formData.numtyre}
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

export default TyreOrder;
