import React from "react";
import "./style.css";
import Header from "../../components/Header";
import google_play_img from '../../assets/images/google_play_button.png';
import facebook_img from '../../assets/images/facebook.png'
import instagram_img from '../../assets/images/instagram.png'
import youtube_img from '../../assets/images/youtube.png'
import logo from '../../components/Header/assets/brand_logo.png'
import iphone_1 from '../../assets/images/iPhone 13 Pro.png'
import iphone_2 from '../../assets/images/iPhone 13 Pro (1).png'
import iphone_3 from '../../assets/images/iPhone 13 Pro (2).png'
import Bubble_img  from '../../assets/images/Bubble image.png'
const AppFeatures = () => {
  return (
    <>
    <Header/>
    <div className="app">
      
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <h1 className="making-your-journey">
            <span className="text-wrapper">Making your journey towards </span>
            <span className="span">health</span>
            <span className="text-wrapper"> easy.</span>
          </h1>
          <p className="p">Check out the best features.</p>
          <div className="frame">
            <img className="iphone" alt="Iphone" src={Bubble_img} />
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
              </div>
            </div>
            <div className="frame-2">
              <img className="rectangle-3" alt="Rectangle" src="rectangle-27.svg" />
              <div className="text-wrapper-4">Videos Recommendations</div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="rectangle-4" />
          <p className="text-wrapper-5">
            Lakhs of hand-picked products including rarely available herbs, shudh desi groceries on a single tap.
          </p>
          <img className="iphone-pro" alt="Iphone pro" src={iphone_3} />
        </div>
        <div className="overlap-3">
          <div className="rectangle-5" />
          <p className="text-wrapper-6">
            Seamlessly connect to your ayurvedic product advisor before or after buying any product.
          </p>
          <img className="iphone-pro-2" alt="Iphone pro" src={iphone_2} />
        </div>
        <div className="overlap-4">
          <div className="rectangle-6" />
          <p className="text-wrapper-7">Content and products advised based on your health preference.</p>
          <div className="group">
            <img className="line" alt="Line" src="line-5.svg" />
            <img className="line-2" alt="Line" src="line-6.svg" />
            <div className="separator">Best Features</div>
          </div>
          <img className="iphone-pro-3" alt="Iphone pro" src={iphone_1} />
        </div>
        <div className="overlap-5">
          <div className="rectangle-7" />
          <p className="text-wrapper-9">Easy buy and repeat your monthly groceries or herbal needs with one click.</p>
          <img className="iphone-pro-4" alt="Iphone pro" src={iphone_1} />
        </div>
       {/* ================================================================ */}
        <footer className="footer">
          <div className="overlap-6">
            <div className="vision-values-app">
              Vision &amp; Values
              <br />
              <br />
              App Features
              <br />
              <br />
              Blogs
            </div>
            <div className="text-wrapper-15">Follow Us</div>
            <div className="text-wrapper-16">Get Connected</div>
            <div className="frame-3">
            <img className="whatsapp-image-2" alt="Whatsapp image" src={logo}/>
              <div className="text-wrapper-17">Ayurveda Kripa</div>
            </div>
            <p className="we-envisage-a-rich">
              <span className="text-wrapper-18">
                We envisage a rich ecosytem of people, products and values following our yogic and ayurvedic heritage.{" "}
                <br />
          

              </span>
              <span className="text-wrapper-19">Ayurveda Kripa</span>
              <span className="text-wrapper-18">
                {" "}
                is a mobile app that tries to develop a healthy lifestyle in our community.{" "}
              </span>
            </p>
            <img className="line-3" alt="Line" src="line-12.svg" />
            <img className="iconsax-bold" alt="Iconsax bold" src={facebook_img} />
            <img className="iconsax-bold-2" alt="Iconsax bold" src={instagram_img} />
            <img className="iconsax-bold-youtube" alt="Iconsax bold youtube" src={youtube_img} />
           
            
            <img className="image" alt="Image" src={google_play_img} />
            <div className="div-wrapper">
              <div className="text-wrapper-20">Name</div>
            </div>
            <div className="overlap-7">
              <div className="text-wrapper-20">Email</div>
            </div>
            <div className="overlap-group-2">
              <div className="text-wrapper-20">Phone Number</div>
            </div>
            <div className="overlap-8">
              <div className="text-wrapper-21">Enter your query</div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-22">Submit</div>
            </div>
            <hr className="my-1" />
            <hr className="my-2" />
          </div>
        </footer>
      </div>
    </div>
    </>
  );
};
export default AppFeatures;   