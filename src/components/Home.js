import React, { useEffect } from "react";
import "./home.css";
import wallpaper from "../assets/img/wallpaper.jpg";
import myself from "../assets/img/myself.png";
import couples from "../assets/img/couples.png";
import teen from "../assets/img/teen.png";
import motivation_section from "../assets/img/motivation_section_banner.jpg";
import { Link } from "react-router-dom";
import arrow1 from "../assets/img/arrow1.png";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBodyClick = () => {
    const checkbox = document.getElementById("nav_check");

    checkbox.checked = false;
  };

  useEffect(() => {
    function handleScroll() {
      const value = window.scrollY * 1.1; // Apply the multiplier
      console.log(value);
      // Find the target element
      const targetElement = document.querySelector(".second_banner_text");
      const targetCards = document.querySelector(".second_banner_group");
      const targetBottom = document.querySelector(".third_banner");
      const targetEquel = document.querySelector(".equel");
      // Check if the target element exists
      if (targetElement) {
        // Check if scrollY is within a specific range
        if (value >= 280) {
          // Add the class to the target element
          targetElement.classList.add("new-class");
        } else {
          // Remove the class from the target element if not in the range
          targetElement.classList.remove("new-class");
        }
      }

      if (targetCards) {
        // Check if scrollY is within a specific range
        if (value >= 680) {
          // Add the class to the target element
          targetCards.classList.add("new-class");
        } else {
          // Remove the class from the target element if not in the range
          targetCards.classList.remove("new-class");
        }
      }

      if (targetBottom) {
        // Check if scrollY is within a specific range
        if (value >= 1130) {
          // Add the class to the target element
          targetBottom.classList.add("new-class");
        } else {
          // Remove the class from the target element if not in the range
          targetBottom.classList.remove("new-class");
        }
      }

      if (targetEquel) {
        // Check if scrollY is within a specific range
        if (value >= 190) {
          // Add the class to the target element
          targetEquel.classList.add("new-class");
        } else {
          // Remove the class from the target element if not in the range
          targetEquel.classList.remove("new-class");
        }
      }
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="section" onClick={handleBodyClick}>
        <div className="main_banner">
          <img src={wallpaper} alt="wallpapers" />
          <div className="text_title">
            <h1>
              Empowering Optimal <br></br>
              mental Health <i>For Everyone!</i>
            </h1>
            <h2>
              Use this search bar to find information on our site, or click on
              one of the buttons below!
            </h2>
            <div class="search__container">
              <input
                class="search__input"
                type="text"
                placeholder="Search with me Peace"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="equel">
        <img src={arrow1} alt="equle"></img>
      </div>
      <div className="section" onClick={handleBodyClick}>
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
      <div className="section" onClick={handleBodyClick}>
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
