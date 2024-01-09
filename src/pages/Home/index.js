import React from "react";
import "./style.css";
import Header from "../../components/Header";
import HeroSection from "../../components/HomePage/HeroSection";
import { Container } from "@mui/material";
import AreaOfWork from "../../components/HomePage/AreaOfWork";
import PromotionalVideo from "../../components/HomePage/PromotionalVideo";
import OnTheGoSection from "../../components/HomePage/OnTheGo";
import WhatWeDo from "../../components/HomePage/WhatWeDo";
import Partner from "../../components/HomePage/Partner";
import { useTheme } from "@mui/material/styles";
import google_play_img from '../../assets/images/google_play_button.png';
import facebook_img from '../../assets/images/facebook.png'
import instagram_img from '../../assets/images/instagram.png'
import youtube_img from '../../assets/images/youtube.png'
import logo from '../../components/Header/assets/brand_logo.png'

const Home = () => {

  const theme = useTheme();

  return (<>
    <Header/>
    <Container maxWidth={false} sx={{backgroundColor:theme.palette.background,color:theme.palette.mode==='dark'?'white':'black'}}>
    <HeroSection/>
    <div class="separator">
      <h2>Our Area of Work</h2>
    </div>
    <AreaOfWork />
    <PromotionalVideo/>
    <div class="separator">
      <h2>Ayurveda On The Go</h2> 
    </div>
    <OnTheGoSection/>
    <div class="separator">
      <h2>What We Do</h2> 
    </div>
    <WhatWeDo/>
    <div class="separator">
      <h2>250+ Partners</h2> 
    </div>
    <Partner />
    <footer className="footer">
          <div className="overlap-group-2">
            <div className="vision-values-app">
              Vision &amp; Values
              <br />
              <br />
              App Features
              <br />
              <br />
              Blogs
            </div>
            <div className="text-wrapper-26">Follow Us</div>
            <div className="text-wrapper-27">Get Connected</div>
            <div className="frame-2">

              <img className="whatsapp-image-2" alt="Whatsapp image" src={logo}/>
              <div className="text-wrapper-28">Ayurveda Kripa</div>
            </div>
            <p className="we-envisage-a-rich">
              <span className="text-wrapper-29">
                We envisage a rich ecosytem of people, products and values following our yogic and ayurvedic heritage.{" "}
                <br />
              </span>
              <span className="text-wrapper-11">Ayurveda Kripa</span>
              <span className="text-wrapper-29">
                {" "}
                is a mobile app that tries to develop a healthy lifestyle in our community.{" "}
              </span>
            </p>
            <img className="line-6" alt="Line" src="line-12.svg" />
            <img className="iconsax-bold" alt="Iconsax bold" src={facebook_img} />
            <img className="iconsax-bold-2" alt="Iconsax bold" src={instagram_img} />
            <img className="iconsax-bold-youtube" alt="Iconsax bold youtube" src={youtube_img} />
            <img className="google_play_image" alt="Image" src={google_play_img} />
            <div className="div-wrapper">
              <div className="text-wrapper-30">Name</div>
            </div>
            <div className="overlap-9">
              <div className="text-wrapper-30">Email</div>
            </div>
            <div className="overlap-10">
              <div className="text-wrapper-30">Phone Number</div>
            </div>
            <div className="overlap-11">
              <div className="text-wrapper-31">Enter your query</div>
            </div>
            <div className="frame-3">
              
              <div className="text-wrapper-32">Submit</div>
            </div>
            <hr className="my-1" />
            <hr className="my-2" />
          </div>
        </footer>

    </Container>
    </>
  );
};

export default Home;