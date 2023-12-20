import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import styles from "../style";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <section
      className={`flex md:flex-row justify-center items-center bg-indigo-900 flex-col ${styles.paddingY}`}
    >
      <div>
        <form
          onSubmit={loginUser}
          className=" gap-4  w-full  mx-auto rounded-lg  bg-gray-1000 p-8 px-8"
        >
          <h2 className="text-3xl p-2 mt-2 rounded-lg   bg-teal-700 animate-pulse text-gradient font-bold text-center">
            Signin
          </h2>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full  mt-2 p-4 rounded-lg  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
          />
          {/* <div className="flex flex-col w-full text-gray-400 py-2"> */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="p-4 w-full rounded-lg mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
          />
          {/* </div> */}
          <button
            className="w-full my-5 py-4 bg-teal-700 shadow-lg text-gradient animate-pulse shadow-orange-200 text-white font-bold rounded-lg pink__gradient"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      {/* gradient start */}
      {/* <div className="absolute z-[0] w-[10%] h-[200%] top-0 pink__gradient" /> */}
      {/* <div className="absolute z-[3] w-[5%] h-[200%] rounded-full white__gradient bottom-40" /> */}
      {/* <div className="absolute z-[0] w-[10%] h-[200%] right-20 bottom-20 blue__gradient" /> */}
      {/* gradient end */}
      {/* <div className="flex justify-between text-gray-400 py-2">
        <div className="absolute z-[99] w-[10%]  h-[70%] top-0 blue__gradient animate-spin" />
      </div> */}
    </section>
  );
};

export default LoginPage;
