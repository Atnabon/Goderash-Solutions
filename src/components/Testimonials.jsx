// src/components/Testimonials.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";
import styles from "../style";
import { star } from "@/assets";

const Testimonials = () => {
  const loopDuration = 5; // Adjust the loop duration as needed
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage(
      (prevPage) => (prevPage + 1) % Math.ceil(feedback.length / itemsPerPage)
    );
  };

  const handlePrevPage = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage - 1 + Math.ceil(feedback.length / itemsPerPage)) %
        Math.ceil(feedback.length / itemsPerPage)
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextPage();
    }, loopDuration * 1000);

    return () => clearInterval(intervalId);
  }, [currentPage]);

  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative border-t-1 py-2  border-white `}
    >
      <div className="absolute z-[0] w-[100%] h-[100%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className=" w-40 h-16 mr-12 mt-5 border-t-4 bg-violet-900 border-t-indigo-700 border-b-4 border-b-pink-800 justify-center items-center rounded-full p-[2px] cursor-pointer ">
          <img src={star} alt="start" className=" animate-bounce" />
        </div>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything You Need To Get Car Services And Grow Your Business
            Anywhere On The Planet With Go derash. Go derash is The Company work
            On Fuel Delivery And Cars Services.
          </p>
        </div>
      </div>

      <div className="flex flex-nowrap overflow-hidden relative z-[1]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: loopDuration, ease: "easeInOut" }}
          >
            <div className="flex flex-nowrap ">
              {feedback
                .slice(
                  currentPage * itemsPerPage,
                  (currentPage + 1) * itemsPerPage
                )
                .map((card) => (
                  <FeedbackCard key={card.id} {...card} />
                ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
