import React from "react";
import "./Category.css";
import {
  BiLogoReact,
  BiCamera,
  BiMusic,
  BiCalculator,
  BiPencil,
} from "react-icons/bi";
import { MdOutlineBusinessCenter, MdAnimation } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
const Category = () => {
  const variants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };
  const transition = {
    duration: 1,
    ease: "easeOut",
    delay: 1.3,
  };

  return (
    <motion.div
      className="cat"
      
    >
      <h2>Browse Top Category</h2>
      <div className="cat-grid">
        <motion.div
          className="cat-grid-item"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={transition}
        >
          <BiLogoReact className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Science</p>
            <span>1,991 courses</span>
          </div>
        </motion.div>
        <motion.div
          className="cat-grid-item"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={transition}>
          <MdOutlineBusinessCenter className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Business</p>
            <span>2,455 courses</span>
          </div>
        </motion.div>
        <motion.div
          className="cat-grid-item"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={transition}>
          <BiCalculator className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Finance Accouting</p>
            <span>1,881 courses</span>
          </div>
        </motion.div>
        <motion.div
          className="cat-grid-item"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={transition}>
          <BiPencil className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Design</p>
            <span>3,487 courses</span>
          </div>
        </motion.div>
        <motion.div
          className="cat-grid-item"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={transition}>
          <BiMusic className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Music</p>
            <span>2,445 courses</span>
          </div>
        </motion.div>
        <motion.div
          className="cat-grid-item"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={transition}>
          <SiGooglemarketingplatform className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Marketing</p>
            <span>4,025 courses</span>
          </div>
        </motion.div>
        <motion.div
          className="cat-grid-item"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={transition}>
          <BiCamera className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Photography</p>
            <span>6,154 courses</span>
          </div>
        </motion.div>
        <motion.div
          className="cat-grid-item"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={transition}>
          <MdAnimation className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Animation</p>
            <span>1,988 courses</span>
          </div>
        </motion.div>
      </div>
      <p>
        We have more category here. <span>Brows all</span>
      </p>
    </motion.div>
  );
};

export default Category;
