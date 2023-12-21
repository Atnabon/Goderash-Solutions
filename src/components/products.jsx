import React, { useState, useEffect } from "react";
import { services } from "../constants";
import styles from "../style";
import Services from "./Services";
// import { Card } from "./ui/card";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

const Products = () => {
  const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage(
        (prevPage) => (prevPage + 1) % Math.ceil(services.length / itemsPerPage)
      );
    }, 50000); // 10 seconds in milliseconds

    return () => clearInterval(intervalId);
  }, [currentPage]);

  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative py-2 border-white `}
    >
      <div className="absolute z-[0] w-[100%] h-[100%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Go Derash Services <br className="sm:block hidden w-full" />
        </h2>
      </div>

      <div className="flex relative z-[10]">
        <div className="flex flex-wrap">
          {services
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((card) => (
              <div
                key={card.id}
                className="w-full sm:w-1 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
              >
                <Services {...card} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
