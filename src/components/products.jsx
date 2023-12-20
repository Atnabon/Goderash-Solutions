import { motion, AnimatePresence } from "framer-motion";
import { feedback } from "../constants";
import styles from "../style";
import { star } from "@/assets";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative border-t-1 py-2  border-white `}
    >
      <div className="absolute z-[0] w-[100%] h-[100%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        {/* <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> 
        </h2> */}
        <div className=" w-40 h-16 mr-12 mt-5 border-t-4 bg-violet-900 border-t-indigo-700 border-b-4 border-b-pink-800 justify-center items-center rounded-full p-[2px] cursor-pointer ">
          <img src={star} alt="start" className=" animate-bounce" />
        </div>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            THis Our Services...!
          </p>
        </div>
      </div>

      <div className="flex flex-nowrap overflow-hidden relative z-[1]">
        <div className="flex flex-nowrap ">
          {feedback
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((card) => (
              <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
