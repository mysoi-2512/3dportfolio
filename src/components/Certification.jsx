import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";
import { demo } from "../assets";

const CertificationCard = ({ index, name, time, image, link}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      {/* <p className="text-white tracking-wider text-[18px]"></p> */}
      <img 
        src={image} 
        alt={image}
        className="w-full h-[200px] object-contain" 
      />

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[15px]">
            <span className="blue-text-gradient">@</span> {name} - {time}
          </p>
        </div>

        <div 
            onClick={() => window.open(link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
          <img 
              src={demo}
              alt="demo"
              className="w-1/3 h-1/3 onject-contain"
          />
        </div>
      </div>

    </div>
  </motion.div>
)

const Certification = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>what I get certified</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certifications.map((certification, index) => (
          <CertificationCard key={certification.name} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certification, "");