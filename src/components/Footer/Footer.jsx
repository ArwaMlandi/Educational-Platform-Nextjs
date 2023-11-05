import React from "react";
import styleFooter from "./styleFooter.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";
import img7 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img6.jpg";
import img10 from "../../assets/images/img5.jpg";
import img11 from "../../assets/images/img11.jpg";
import img12 from "../../assets/images/img12.jpg";
import img13 from "../../assets/images/img13.jpg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styleFooter.footer}>
      <div className={styleFooter.gridContainer}>
        <div className={styleFooter.gridItem}>
          <div className={styleFooter.colOne}>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              blanditiis amet culpa ad quisquam, animi voluptas
            </p>
            <p>Contact</p>
            <div className={styleFooter.footSocial}>
              <FaLinkedin className={styleFooter.footSocialLi} />
              <FaFacebook className={styleFooter.footSocialLi} />
              <FaInstagram className={styleFooter.footSocialLi} />
              <FaTwitter className={styleFooter.footSocialLi} />
              <FaYoutube className={styleFooter.footSocialLi} />
            </div>
          </div>
        </div>
        <div className={styleFooter.griditem}>
          <h4>Project</h4>
          <div className={styleFooter.colTwo}>
            <li className={styleFooter.colTwoLI}>Web Design</li>
            <li className={styleFooter.colTwoLI}>Html5</li>
            <li className={styleFooter.colTwoLI}>Css3</li>
            <li className={styleFooter.colTwoLI}>jQuery</li>
            <li className={styleFooter.colTwoLI}>Bootstrap</li>
          </div>
        </div>
        <div className={styleFooter.griditem}>
          <h4>Gallery</h4>
          <div className={styleFooter.colThree}>
            <div className={styleFooter.rowFoot}>
              <Image src={img7} alt="Image 1" className={styleFooter.footImage} />
              <Image src={img9} alt="Image 2" className={styleFooter.footImage} />
              <Image src={img10} alt="Image 3" className={styleFooter.footImage} />
            </div>
            <div className={styleFooter.rowFoot}>
              <Image src={img11} alt="Image 4" className={styleFooter.footImage} />
              <Image src={img12} alt="Image 5" className={styleFooter.footImage} />
              <Image src={img13} alt="Image 6" className={styleFooter.footImage} />
            </div>
          </div>
        </div>
        <div className={styleFooter.griditem}>
          <h4>Contact</h4>
          <div className={styleFooter.colFour}>
            <p>43 Rymoundth Rd. Baltmoer, London 1254</p>
            <div className={styleFooter.colTwo}>
              <li className={styleFooter.colTwoLi}>+1(123)-587-521</li>
              <li className={styleFooter.colTwoLi}>+1(123)-587-521</li>
              <li className={styleFooter.colTwoLi}>info@emailEdu.com</li>
            </div>
          </div>
        </div>
      </div>

      <div className={styleFooter.footEnd}>
        <p>
          copyright © 2022 all rights reserved -Designed with love by Untree.co
          Distributed By Arwa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
