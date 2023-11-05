import React, { useState } from 'react'
import styles from './styles.module.css'
import { AiFillPhone, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { BsList } from "react-icons/bs";
import {BiHeart } from "react-icons/bi";
import Image from 'next/image'
import imgee from '../assets/images/img222.svg'
import Link from 'next/link';
import { Provider } from 'react-redux';
import store from '../store/index'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer/Footer';
const DashboardLayout = ({children}) => {
    const [menueopen, setmenueopen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
  
    const handleClick = (item) => {
      setActiveItem(item);
    };
  return (
   <Provider store={store}>
     <div className={styles.backgroundContainer}>
      
        
     <div className={styles.containerAll}>
      <div className={styles.containerUp}>
        <div className={styles.navLeft}>
          <div className={styles.navLeft}>
            {" "}
            <AiOutlineQuestionCircle size={14} />
            <p>Have a questions?</p>
          </div>
          <div className={styles.navLeft}>
            <AiFillPhone size={14} />
            <p>14 22 254 101</p>
          </div>
          <div className={styles.navLeft}>
            <MdEmail size={14} />
            <p>info@emailEdu.com</p>
          </div>
        </div>
        <div className={styles.navRight}>
        <li className={styles.navItem}>
          <Link href="/login" onClick={() => handleClick("login")}>
            Sign in
          </Link>
        </li>
          
        </div>
      </div>
     

   {/*   <NaveBarDown />*/}
   <nav className={styles.navbar}>
      <h2>Learner</h2>
      <div className={styles.topMenue} onClick={() => setmenueopen((prev) => !prev)}>
        <BsList />
      </div>
      <ul className={styles.menue} style={{ top: menueopen && "0" }}>
        <li className={styles.navItem}>
          <Link onClick={() => handleClick("home")} href="/home">
            Home
          </Link>
        </li>
      
        <li className={styles.navItem}>
          <Link href="/about" onClick={() => handleClick("about")}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/news" onClick={() => handleClick("news")}>
            News
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/courses" onClick={() => handleClick("course")}>
            Courses
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/teachers" onClick={() => handleClick("teachers")}>
            Our Teachers
          </Link>
        </li>

       
        <li className={styles.navItem}>
          <Link href="/students" onClick={() => handleClick("students")}>
            Students
          </Link>
        </li>
       {/* <li className={styles.navItem}>
          <Link href="/" onClick={() => handleClick("contact")}>
          Favourite <BiHeart/>
         
          </Link>
  </li> */}
      </ul>

      <button className={styles.navButton}>ENROLL NOW</button>
    </nav>
    <Image
          src={imgee}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
        <div className={styles.homeContent}>
          <span>WHATCH THE VIDEO</span>
          <h2>Education is the Mother of Leadership </h2>
          <button className={styles.homeButton}>EXPLORE MORE</button>
        </div>
    </div>
    </div>
    {children}
    <Footer/>
   </Provider>
  )
}

export default DashboardLayout