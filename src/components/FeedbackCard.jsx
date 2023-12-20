import React from "react";
import { motion } from "framer-motion";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-wrap px-10 py-12 rounded-[20px]  md:mr-10 sm:mr-5 mr-0 my-5 feedback-card border"
  >
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-col md:flex-row items-center">
      <img
        src={img}
        alt={name}
        className="w-[48px] h-[48px] rounded-full mb-4 md:mb-0 md:mr-4"
      />
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </motion.div>
);

export default FeedbackCard;
