import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import imgee from '../assets/images/img111.svg'
import { AiFillPhone, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
export default function Home() {
 


  return (
    <main >
   
   <div className={styles.backgroundContainer}>
        <Image
          src={imgee}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
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
        <li >
          <Link href="/login">
            Sign in 
          </Link>
        </li>
          
        </div>
      </div>
        <div className={styles.homeContent}>
          
          <h2 className={styles.homeContentH2}>Welcome to the educational platform</h2>
          <ul className={styles.menu} >
        <li className={styles.navItem}>
          <Link  href="/home">
            Home
          </Link>
        </li>
      
        <li className={styles.navItem}>
          <Link href="/about" >
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/news" >
            News
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/courses" >
            Courses
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/teachers" >
            Our Teachers
          </Link>
        </li>

       
        <li className={styles.navItem}>
          <Link href="/students">
            Students
          </Link>
        </li>
       {/* <li className={styles.navItem}>
          <Link href="/">
          Favourite <BiHeart/>
         
          </Link>
  </li> */}
      </ul>
        </div>
        </div>
       {/* <NavBarUp />*/}
      </div>
    </main>
  )
}
