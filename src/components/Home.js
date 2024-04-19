import "./home.css";
import wallpaper from "../assets/img/wallpaper.jpg";
import myself from "../assets/img/myself.png";
import couples from "../assets/img/couples.png";
import teen from "../assets/img/teen.png";
import motivation_section from "../assets/img/motivation_section_banner.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="section">
        <div className="main_banner">
          <img src={wallpaper} alt="wallpapers" />
        </div>
      </div>

      <div className="section">
        <div className="second_banner_text">
          <h1>Find the highest meaning in your activities</h1>
          <p>What type of therapy your are searching..</p>
        </div>
        <div className="second_banner_group">
          <div className="frame1">
            <Link to="/self">
              <div className="image1">
                <img src={myself} alt="FAQimage" />
              </div>
              <div className="text">
                <h1>Individual</h1>
                <p>For yorself </p>
                <p>
                  <i className="ri-corner-down-right-fill"></i>
                </p>
              </div>
            </Link>
          </div>
          <div className="frame2">
            <Link to="/partners">
              <div className="image2">
                <img src={couples} alt="FAQimage" />
              </div>
              <div className="text">
                <h1>Couples</h1>
                <p>For partners</p>
                <p>
                  <i className="ri-corner-down-right-fill"></i>
                </p>
              </div>
            </Link>
          </div>
          <div className="frame3">
            <Link to="/child">
              <div className="image3">
                <img src={teen} alt="FAQimage" />
              </div>
              <div className="text">
                <h1>Teen</h1>
                <p>For childern</p>
                <p>
                  <i className="ri-corner-down-right-fill"></i>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="third_banner">
          <div className="text">
            <span>OUR APPROACH</span>
            <h1>Get Motivation to journey</h1>
            <p>
              Embark on a journey with more than "numbers" kindred spirits
              who've chosen the path to uplift their spirits and embrace joy
              alongside us.
            </p>
          </div>
          <div className="image">
            <img src={motivation_section} alt="motivation sections" />
          </div>
        </div>
      </div>
    </>
  );
};