import React from "react";
import "./BestEducation.css";
import {
  BiCalculator,
  BiMusic,
  BiBookOpen,
  BiBookReader,
  BiLoaderAlt,
  BiHeadphone,
} from "react-icons/bi";
import { motion } from 'framer-motion';
const BestEducation = () => {
  const items = [
    {
      icon: <BiMusic className="best-item-icon" size={30} />,
      title: 'Music Class',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsa culpa magnam veniam repellendus porro doloribus. Nisi quisquam incidunt ratione',
    },
    {
      icon: <BiCalculator className="best-item-icon" size={30} />,
      title: 'Math Class',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsa culpa magnam veniam repellendus porro doloribus. Nisi quisquam incidunt ratione',
    },
    {
      icon: <BiBookOpen className="best-item-icon" size={30} />,
      title: 'English Class',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsa culpa magnam veniam repellendus porro doloribus. Nisi quisquam incidunt ratione',
    },
    
    {
      icon: <BiBookReader className="best-item-icon" size={30} />,
      title: 'Reading for Kids',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsa culpa magnam veniam repellendus porro doloribus. Nisi quisquam incidunt ratione',
    },
    {
      icon: <BiLoaderAlt className="best-item-icon" size={30} />,
      title: 'History Class',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsa culpa magnam veniam repellendus porro doloribus. Nisi quisquam incidunt ratione',
    },
    {
      icon: <BiHeadphone className="best-item-icon" size={30} />,
      title: 'Music',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsa culpa magnam veniam repellendus porro doloribus. Nisi quisquam incidunt ratione',
    },
    

  
  
  ]
  
  const transition = {
    duration: 4,
    ease: 'easeInOut',
  };
  return (
    <div className="best">
    <h2>We Have Best Education</h2>
    <p className="best-p">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
      <br />
      dolorum maxime minus libero ab recusandae delectus exercitation
    </p>
    <div className="best-grid">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="best-grid-item"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ...transition,
            delay: index * 0.2,
          }}
        >
          <motion.div
            className="bubble"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.icon}
          </motion.div>
          <div className="best-item-text">
            <p className="best-item-text-p">{item.title}</p>
            <span className="best-item-text-span">{item.description}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  );
};

export default BestEducation;
