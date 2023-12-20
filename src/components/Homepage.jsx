import Header from "./Header";
import HowTo from "./HowTo";
import Testimonials from "./Testimonials";
import Business from "./Business";
import styles from "@/style";

const Homepage = () => {
  return (
    <div>
      <Header />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HowTo />
          <Business />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
