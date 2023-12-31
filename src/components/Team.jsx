import styles from "../style";
import im from "../assets/im.svg";
import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

const Team = () => {
  return (
    <div className=" h-screen sm:block hidden justify-center  items-center">
      <div className="flex w-full ml-16 mt-16 bg-secondary py-1  "></div>

      <div className="flex flex-col rounded-e-sm gap-4 mr-auto md:flex-row space-y-5 md:space-y-0 md:space-x-8 mx-4 md:mx-8 lg:mx-16">
        <div className="flex flex-col h-full ml-10  items-center md:w-1/4">
          <div className="p-1 mr-48 bg-secondary h-[100px] "></div>
          <img
            src={im}
            alt="im"
            className=" mr-48 w-10 hover:border-3 border-3 shadow-secondary  shadow-md hover:shadow-md  hover:scale-150  scale-150  hover:shadow-white bg-secondary  hover:bg-white rounded-full transition-opacity duration-800 opacity-1 hover:opacity-100 "
          />
          <div className="flex flex-col mt-1 mr-52 md:flex-row justify-center space-y-4 md:space-x-4">
            <Card className="w-full md:w-[350px] mt-2 bg-[#011730]  hover:shadow-md hover:bg-current hover:border-rose-50 hover:border-x-green-900 hover:-shadow-xl hover:border-y-sky-600">
              <CardHeader>
                <CardTitle className="text-white">Our Goal </CardTitle>
              </CardHeader>
              <CardContent className="text-white font-sans">
                This is Go Derash Come on...! This is Go Derash Come on...! This
                is Go Derash Come on...! This is Go Derash Come on...! This is
                Go Derash Come on...! This is Go Derash Come on...! This is Go
                Derash Come on...! This is Go Derash Come on...!
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <div className="p-1 ml-10 h-[100px]  bg-secondary"></div>
          <img
            src={im}
            alt="im"
            className=" ml-10 w-10 hover:border-3 border-3 shadow-secondary  shadow-md hover:shadow-md  hover:scale-150  scale-150  hover:shadow-white bg-secondary  hover:bg-white rounded-full transition-opacity duration-800 opacity-1 hover:opacity-100 "
          />
          <div className="flex flex-col md:flex-row mt-2 justify-center space-y-4 md:space-x-4">
            <Card className=" w-full md:w-[350px] bg-[#011730]  hover:shadow-md hover:bg-current  hover:border-rose-500 hover:border-x-green-400 hover:border-shadow-xl hover:border-y-yellow-900">
              <CardHeader>
                <CardTitle className="text-white">M...!</CardTitle>
              </CardHeader>
              <CardContent className="text-white ">
                {" "}
                This is Go Derash Come on...! This is Go Derash Come on...! This
                is Go Derash Come on...! This is Go Derash Come on...! This is
                Go Derash Come on...! This is Go Derash Come on...! This is Go
                Derash Come on...! This is Go Derash Come on...!
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <div className="p-1 ml-28 h-[100px]  bg-secondary"></div>
          <img
            src={im}
            alt="im"
            className="p-1 ml-28 w-10 hover:border-3 border-3 shadow-secondary  shadow-md hover:shadow-md  hover:scale-150  scale-150  hover:shadow-white bg-secondary  hover:bg-white rounded-full transition-opacity duration-800 opacity-1 hover:opacity-100"
          />
          <div className="flex flex-col mt-2 ml-10  md:flex-row justify-center space-y-4 md:space-x-4">
            <Card className="w-full md:w-[350px] bg-[#011730]  hover:shadow-md hover:bg-current  hover:border-rose-500 hover:border-x-green-400 hover:border-shadow-xl hover:border-y-blue-700">
              <CardHeader>
                <CardTitle className="text-white">V...!</CardTitle>
              </CardHeader>
              <CardContent className="text-white ">
                {" "}
                This is Go Derash Come on...! This is Go Derash Come on...! This
                is Go Derash Come on...! This is Go Derash Come on...! This is
                Go Derash Come on...! This is Go Derash Come on...! This is Go
                Derash Come on...! This is Go Derash Come on...!
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="absolute z-[1000] w-[20%] h-[10%] blue__gradient bottom-40 " />
      <div className="absolute z-[10] w-[20%] h-[10%] overflow-hidden  bottom-20 blue__gradient " />
    </div>
  );
};

export default Team;
