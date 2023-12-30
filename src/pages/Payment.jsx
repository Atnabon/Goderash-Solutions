// PaymentPage.js
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { orderId } = useParams();

  const handlePayment = () => {
    // Simulate payment logic
    console.log("Payment successful for Order ID:", orderId);
    alert("Payment successful!");
  };

  useEffect(() => {
    // You can fetch additional order details from the server if needed
    // For simplicity, we are using the order_id and total from the URL params
  }, []);

  return (
    <div className=" w-screen h-screen">
      <h1>Payment Page</h1>
      <div>
        <h2>Order Details</h2>
        <p>Order ID: {orderId}</p>
        {/* <p>Total Price: ${total}</p> */}
        {/* Additional order information can be displayed here */}
      </div>
      <div>
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default Payment;
