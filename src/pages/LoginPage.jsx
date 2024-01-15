import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import styles from "../style";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <section
      className={`flex md:flex-row justify-center items-center bg-[#011730] flex-col ${styles.paddingY}`}
    >
      <div>
        <form
          onSubmit={loginUser}
          className=" gap-4  w-full  mx-auto rounded-lg bg-[hsl(212,68%,4%)]  p-8 px-8"
        >
          <h2 className="text-3xl p-2 mt-2 rounded-lg  text-white font-bold text-center">
            Sign in
          </h2>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full  mt-2 p-4 rounded-lg  focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="p-4 w-full rounded-lg mt-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
          />
          <Button
            className="w-full my-5 py-4 rounded-2xl hover:bg-secondary shadow-lg text-white "
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
