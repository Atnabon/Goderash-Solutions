// src/App.js

import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Sub() {
  return (
    <div className="`bg-[#011730] text-white p-8 ">
      <h2 className="text-center text-4xl font-bold mb-6">
        Subscriptions For More
      </h2>
      <p className="text-center text-lg mb-10">
        Choose the right pricing for you and get started working on your project
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4">
        <Card className="w-full md:w-[350px] mt-3 bg-indigo-900 hover:shadow-md hover:bg-current hover:border-rose-50 hover:border-x-green-900 hover:-shadow-xl hover:border-y-sky-600">
          <CardHeader>
            <CardTitle className="text-white">Pro...! </CardTitle>
            <CardDescription className="text-xl text-white font-bold">
              2000 /months
            </CardDescription>
            <CardDescription className="text-white font-bold">
              Fuel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside text-white list-disc space-y-2 mb-4">
              <li>For CarS</li>
              <li>For Motors</li>
              <li>For Homes </li>
              <li>For all vehicles </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-secondary text-black shadow-2xl hover:shadow-white hover:animate-bounce shadow-transparent hover:bg-white flex items-center px-4 py-2  rounded-md">
              <span className="mr-2">Start pro Trial</span>
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full md:w-[350px] bg-yellow-600 hover:shadow-md hover:bg-current  hover:border-rose-500 hover:border-x-green-400 hover:border-shadow-xl hover:border-y-blue-700">
          <CardHeader>
            <CardTitle className="text-white">Pro...!</CardTitle>
            <CardDescription className="text-xl font-bold text-white">
              20000 /month
            </CardDescription>
            <CardDescription className="text-xl text-white">
              {/* gradient */}
              Insurances
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc text-white space-y-2 mb-4">
              <li>For Cars</li>
              <li>For Home</li>
              <li>For Your Company</li>
              <li>For Life</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-secondary text-black shadow-2xl hover:shadow-white hover:animate-bounce shadow-transparent hover:bg-white flex items-center px-4 py-2  rounded-md">
              <span className="mr-2">Start pro Trial</span>
            </Button>
          </CardFooter>
        </Card>
        <Card className=" w-full md:w-[350px] bg-[#6a1541] hover:shadow-md hover:bg-current  hover:border-rose-500 hover:border-x-green-400 hover:border-shadow-xl hover:border-y-yellow-900">
          <CardHeader>
            <CardTitle className="text-white">Pro...!</CardTitle>
            <CardDescription className="text-xl text-white font-bold">
              24,000 /month
            </CardDescription>
            <CardDescription className="text-xl text-white">
              Bolo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc text-white space-y-2 mb-4">
              <li>For Cars</li>
              <li>For Cars</li>
              <li>For Cars</li>
              <li>For Cars</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-secondary text-black shadow-2xl hover:shadow-white hover:animate-bounce hover:bg-white flex items-center px-4 py-2  rounded-md">
              <span className="mr-2">Start pro Trial</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Sub;