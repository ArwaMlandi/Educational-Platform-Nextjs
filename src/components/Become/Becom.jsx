import React from "react";
import "./Becom.css";
import image from "../../assets/images/img4.jpg"
import { FaCheck } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import styleBecome from './styleBecom.module.css'
const Becom = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      controls.start({ x: 0, opacity: 1 });
    }, 2000); // Delay in milliseconds before animation starts

    return () => clearTimeout(animationTimeout);
  }, [controls]);

  const transition = {
    duration: 1.5,
    ease: 'easeInOut',
  };
  return (
    <div className={styleBecome.become}>
      <motion.div
        className={styleBecome.becomeLeft}
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={transition}
      >
        <h2>Become an Instructor</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          similique iusto molestias, nostrum quas quod Reiciendis similique
          iusto molestias, Reiciendis similique iusto molestias,
        </p>
        <ul className={styleBecome.becomUl}>
          <li className={styleBecome.becomLi}>
            <FaCheck size={15} /> <span>Behind the world Mountains</span>
          </li>
          <li className={styleBecome.becomLi}>
            <FaCheck size={15} /> <span>Far far away Mountains</span>
          </li>
          <li className={styleBecome.becomLi}>
            <FaCheck size={15} /> <span>Large Language Ocean</span>
          </li>
          <button className={styleBecome.becomButton}>GET STARTED</button>
        </ul>
      </motion.div>
      <div
        className={styleBecome.becomeRight}
       
      >
        <div></div>
        <Image
          src={image}
         className={styleBecome.becomRightImg}
         
         
        />
      </div>
    </div>
  );
};

export default Becom;
