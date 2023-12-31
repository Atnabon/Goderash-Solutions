// Products.js
import React, { useState, useEffect } from "react";
import { services } from "../constants";
import styles from "../style";
import Services from "./Services";

const Products = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage(
        (prevPage) => (prevPage + 1) % Math.ceil(services.length / itemsPerPage)
      );
    }, 3000); // 10 seconds in milliseconds

    return () => clearInterval(intervalId);
  }, [currentPage]);

  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} font-sans  overflow-hidden  flex-col relative py-2 border-white`}
    >
      <div className="absolute z-[10] w-[40%] h-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} font-sans`}>
          Go Derash Services <br className="sm:block hidden font-sans w-full" />
        </h2>
      </div>
      <div className="flex relative z-[10] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${currentPage * (5 / itemsPerPage)}%)`,
          }}
        >
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
