import React from 'react'
import { FaCheck } from "react-icons/fa";
import im4 from "../../assets/images/img12.jpg";
import styleHome from './styleHome.module.css'
import Image from 'next/image';
import DashboardLayout from '../../layouts/DashboardLayout';
import Category from '../../components/Category/Category';
import Becom from '../../components/Become/Becom';
import BestEducation from '../../components/BestEducation/BestEducation';
import CourseHome from '../../components/Courses/CourseHome';
import NewsHome from '../../components/News/NewsHome';
import Price from '../../components/Price/Price';
import Testamonial from '../../components/Testomonial/Testamonial';
import ChooseUs from '../../components/ChooseUs/ChooseUs';
function index() {
 
    
  
    
    return (
        <DashboardLayout>
      <div>
       <Category/>
   <Becom/>
   <BestEducation/>
  
<CourseHome/>
  
       {/* <CourseHome coursedata={coursesToShow} />*/}
  
       
  
        <div className={styleHome.homeAbout}>
          <div className={styleHome.becomeLeft}>
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              similique iusto molestias,
              <br /> nostrum quas quod Reiciendis similique iusto molestias,
              Reiciendis similique iusto molestias,
              <br /> Reiciendis similique iusto
            </p>
            <ul className={styleHome.becomUl}>
              <li className={styleHome.becomLi}>
                <FaCheck size={15} /> <span>Sperated They live.</span>
              </li>
              <li className={styleHome.becomLi}>
                <FaCheck size={15} />{" "}
                <span>Bookmarksgrove right at the coast.</span>
              </li>
              <li className={styleHome.becomLi}>
                <FaCheck size={15} /> <span>Larg Language Ocean</span>
              </li>
              <div className={styleHome.homeAboutNum}>
                <p className={styleHome.homeAboutNumP}>
                  {" "}
                  <span className={styleHome.homeAboutNumspan}>2+0</span> No, Students
                </p>
                <p className={styleHome.homeAboutNumP}>
                  <span className={styleHome.homeAboutNumspan}>0</span>No , Teachers
                </p>
                <p className={styleHome.homeAboutNumP}>
                  <span className={styleHome.homeAboutNumspan}>0</span>No , Awards
                </p>
              </div>
              <button className={styleHome.becomButton}>ADDMITION</button>
              <button className={styleHome.homeAboutButton}>LEARN MORE</button>
            </ul>
          </div>
  
          <div className={styleHome.rightTest}>
            <div></div>
            <div></div>
            <Image
          src={im4}
          alt="Background Image"
         
          className={styleHome.personTest} 
        />
           
          </div>
        </div>
        <NewsHome/>
       
  <Price/>
  <Testamonial/>
       
      <ChooseUs title="Why Choose Us"
      
          
          desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
               there live the blind texts. "/>
        
      </div>
      </DashboardLayout>
  )
}

export default index