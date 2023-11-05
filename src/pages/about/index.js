import DashboardLayout from '../../layouts/DashboardLayout';
import React, { useState } from 'react'
import Image from 'next/image'
import imgee from '../../assets/images/img111.svg'
import styleAbout from './styleAbout.module.css'
import t1 from "../../assets/images/t-image1.png";
import t2 from "../../assets/images/t-image2.jpg";
import t3 from "../../assets/images/t-image3.jpg";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Becom from '../../components/Become/Becom';
import BestEducation from '../../components/BestEducation/BestEducation';
import ChooseUs from '../../components/ChooseUs/ChooseUs';
const index = () => {
  const backgroundImageUrl = '../../assets/images/img111.svg';

  const containerAllStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  
  const [team, setTeam] = useState([
    {
      id: 1,
      image: t1,
      Name: "Anderson Mattheo",
      job: "Teacher in Music",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. t",
      icon1: <FaFacebook />,
      icon2: <FaTwitter />,
      icon3: <FaLinkedin />,
    },
    {
      id: 2,
      image: t2,
      Name: "Mina Colleds",
      job: "Teacher in Math",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. t",
      icon1: <FaFacebook />,
      icon2: <FaTwitter />,
      icon3: <FaLinkedin />,
    },
    {
      id: 3,
      image: t3,
      Name: "Dora",
      job: "Teacher English",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. t",
      icon1: <FaFacebook />,
      icon2: <FaTwitter />,
      icon3: <FaLinkedin />,
    },
  ]);

  return (
    <DashboardLayout>
    
       {/* <NavBarUp />*/}
      <Becom/>
      <div className={styleAbout.courseContainer}>
        <h2 className={styleAbout.courseContainerH2}>Our Team</h2>
        <p className={styleAbout.bestP}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,{" "}
          <br /> dolorum maxime minus libero ab recusandae delectus exercitation
        </p>

        <div className={styleAbout.team}>
          {team.map((card) => (
            <div className={styleAbout.teamCard} key={card.id}>
              <div className={styleAbout.teamCardContent}>
                <div className={styleAbout.teamImageContainer}>
                  <Image src={card.image} alt={card.Name} />
                </div>

                <h3 className={styleAbout.teamTitle}>{card.Name}</h3>
                <span className={styleAbout.teamJob}>{card.job}</span>

                <span className={styleAbout.teamP}>
                  {card.description} <br /> {card.description}
                </span>

                <div className={styleAbout.teamIcons}>
                  <p className={styleAbout.teamIcons}> {card.icon1}</p>
                  <p className={styleAbout.teamIcons}>{card.icon2} </p>
                  <p className={styleAbout.teamIcons}> {card.icon3}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BestEducation/>
      <ChooseUs title="Why Choose Us"
      
          
      desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
           there live the blind texts. "/>
    </DashboardLayout>
  )
}

export default index