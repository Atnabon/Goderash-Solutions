import styles from "../style";
import im from "../assets/im.svg";

const Team = () => {
  return (
    <div className="  h-screen sm:block hidden ">
      <div className="flex w-full ml-16 rounded-s-md mt-16 bg-secondary py-1"></div>

      <div className="flex flex-col rounded-e-sm gap-4 mr-auto md:flex-row space-y-5 md:space-y-0 md:space-x-8 mx-4 md:mx-8 lg:mx-16">
        <div className="flex flex-col h-full ml-10  items-center md:w-1/4">
          <div className="p-1  mr-80 bg-secondary h-[100px]  "></div>
          <img
            src={im}
            alt="im"
            className="p-1 mr-80  w-14  shadow-2xl rounded-full bg-secondary "
          />
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <div className="p-1 ml-36  h-[100px] rounded-b-lg bg-secondary"></div>
          <img
            src={im}
            alt="im"
            className="p-1 ml-36  w-14 shadow-2xl rounded-full bg-secondary "
          />{" "}
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <div className="p-1 ml-96  h-[100px] rounded-b-lg bg-secondary"></div>
          <img
            src={im}
            alt="im"
            className="p-1  ml-96   w-14 shadow-2xl rounded-full bg-secondary "
          />{" "}
        </div>
      </div>
      <div className="absolute z-[1000] w-[20%] h-[100%] top-1 rounded-full yellow__gradient bottom-40 " />
      <div className="absolute z-[10] w-[20%] h-[100%] right-20 bottom-20 blue__gradient animate-pulse" />
    </div>
  );
};

export default Team;
