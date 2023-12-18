import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import styles from "../style";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <section
      className={`flex md:flex-row justify-center items-center bg-cyan-800 flex-col ${styles.paddingY}`}
    >
      <div>
        <form
          onSubmit={loginUser}
          className="max-w-[400px]  w-full  mx-auto rounded-lg  bg-gray-1000 p-8 px-8"
        >
          <h2 className="text-3xl  bg-teal-500 text-gradient font-bold text-center">
            Signin
          </h2>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
          />
          {/* <div className="flex flex-col w-full text-gray-400 py-2"> */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="p-2 w-full rounded-lg mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
          />
          {/* </div> */}
          <button
            className="w-full my-5 py-2 bg-teal-500 shadow-lg text-gradient hover:animate-pulse shadow-teal-500/50 text-white font-bold rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      {/* gradient start */}
      <div className="absolute z-[0] w-[10%] h-[200%] top-0 pink__gradient" />
      {/* <div className="absolute z-[3] w-[5%] h-[200%] rounded-full white__gradient bottom-40" /> */}
      <div className="absolute z-[0] w-[10%] h-[200%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
      <div className="flex justify-between text-gray-400 py-2">
        <div className="absolute z-[99] w-[10%]  h-[70%] top-0 blue__gradient animate-spin" />
      </div>
    </section>
  );
};

export default LoginPage;
