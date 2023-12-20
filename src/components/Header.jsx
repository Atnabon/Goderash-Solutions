import { Button } from "@/components/ui/button";
import bgimg from "../assets/bgo.jpg";
import b from "../assets/b.png";
import logo_icon from "../assets/image/logo/logo-icon.svg";
import styles from "../style";
import { arrowUp } from "../assets";

export default function Component() {
  return (
    <div className="relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Background"
          className="w-full h-full object-cover animate-pulse"
          height="2048"
          src={b}
          style={{
            aspectRatio: "581/2048",
            objectFit: "cover",
          }}
          width="581"
        />
        <div className="absolute inset-0 bg-black opacity-5" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 py-8">
        {/* header*/}
        <header className="w-full flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gradient  ml-3">GODERASH</h1>
          {/* <img
            alt="Logo"
            className=" rounded-full w-20 h-20 mb-10 object-cover ml-8"
            src={logo_icon}
            style={{
              aspectRatio: "100/2048",
              objectFit: "cover",
            }}
          /> */}

          <nav className="flex justify-between items-center px-6 py-4 space-x-10">
            <div className="flex items-center space-x-4">
              <ul className="hidden md:flex space-x-6">
                <li>
                  <a className="hover:text-gray-300 text-white" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-300 text-white" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-300 text-white" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-300 text-white" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-300 text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-secondary text-black shadow-2xl hover:shadow-white hover:bg-white flex items-center px-4 py-2  rounded-md">
                <span className="mr-2">Download Now</span>
                <AppleIcon className="text-black mr-1" />
                <SmartphoneIcon className="text-black" />
              </Button>
              <div className="md:hidden">
                <MenuIcon className="text-white" />
              </div>
            </div>
          </nav>
        </header>

        {/*main*/}
        <main className="flex mt-32 flex-col items-center text-center mb-10 pt-4">
          <h2 className="text-6xl font-bold text-white mb-4">
            We give you the time to do the things that matter
          </h2>
          <p className="text-xl text-white mb-8">
            Fuel delivery and time-saving vehicle services
          </p>
          <div
            className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
          >
            <div
              className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
            >
              <div className={`${styles.flexStart} flex-row `}>
                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                  <span className="text-gradient">Get</span>
                </p>
                <img
                  src={arrowUp}
                  alt="arrow-up"
                  className="w-[23px] h-[23px] object-contain"
                />
              </div>

              <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                <span className="text-gradient">Goderash</span>
              </p>
            </div>
          </div>
        </main>

        {/* gradient start */}
        <div className=" rounded-full  ">
          <div className="flex overflow-hidden justify-between py-2">
            <div className="absolute z-[99] w-[10%] overflow-hidden ml-72  h-[70%] top-0 blue__gradient " />
          </div>
          <div className="absolute rounded-full mt-24 ml-44 overflow-hidden  z-[10] w-[10%] h-[20%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>
    </div>
  );
}

{
  /* icon */
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function AppleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
