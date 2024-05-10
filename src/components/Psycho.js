import React, { useState, useEffect } from "react";
import "./psyQuizzes.css";
import "./boxhover.css";
import gifanimation from "../assets/img/Animation.gif";
import image1 from "../assets/img/smiling-professional.jpeg";
import cont_1_image from "../assets/img/design1.png";
import cont_2_image from "../assets/img/design(1).png";
import cont_3_image from "../assets/img/design(2).png";
import cont_4_image from "../assets/img/design(3).png";
import arrows_1 from "../assets/img/arrow1.png";
import arrows_2 from "../assets/img/arrow3.png";
import arrows_3 from "../assets/img/arrows3.png";
import arrows_4 from "../assets/img/arrows4.png";
import arrows_5 from "../assets/img/arrow2.png";
import div_sec_image from "../assets/img/banner_sec_Quize.png";

const BookingCard = ({ imageUrl, title, subTitle, info }) => (
  <li className="booking-card" style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className="book-container">
      <div className="content">
        <button className="btn">FIND</button>
      </div>
    </div>
    <div className="informations-container">
      <h2 className="title">{title}</h2>
      <p className="sub-title">{subTitle}</p>
      <div className="more-information">
        <div className="info-and-date-container">
          <div className="box info">
            <p>{info}</p>
            <div className="gifimage">
              <img src={gifanimation} alt="animation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export const Psycho = () => {
  const bookings = [
    {
      imageUrl: image1,
      title: "Personality Test",
      subTitle:
        "To determine your personality type, you can take our personality test.",
      info: "Take a deep breath and relax",
    },
    {
      imageUrl: image1,
      title: "Personality Test",
      subTitle:
        "To determine your personality type, you can take our personality test.",
      info: "Take a deep breath and relax",
    },
    {
      imageUrl: image1,
      title: "Personality Test",
      subTitle:
        "To determine your personality type, you can take our personality test.",
      info: "Take a deep breath and relax",
    },
  ];

  const instructdetails = [
    {
      detailsCardImg: cont_1_image,
      title: "INITIAL EVALUATION",
      subtitle:
        "It seems like you're trying to pass the image1 variable incorrectly as the imageUrl prop in your Psycho component. Instead of wrapping image1 in curly braces within the imageUrl property, you should directly pass image1 as the value. Here's the corrected version of your Psycho component:",
      arrow_type_: arrows_1,
    },
    {
      detailsCardImg: cont_2_image,
      title: "MEDICAL CONSULTATION",
      subtitle:
        "It seems like you're trying to pass the image1 variable incorrectly as the imageUrl prop in your Psycho component. Instead of wrapping image1 in curly braces within the imageUrl property, you should directly pass image1 as the value. Here's the corrected version of your Psycho component:",
      arrow_type_: arrows_2,
    },
    {
      detailsCardImg: cont_3_image,
      title: "TREATMENT PLAN",
      subtitle:
        "It seems like you're trying to pass the image1 variable incorrectly as the imageUrl prop in your Psycho component. Instead of wrapping image1 in curly braces within the imageUrl property, you should directly pass image1 as the value. Here's the corrected version of your Psycho component:",
      arrow_type_: arrows_3,
    },
    {
      detailsCardImg: cont_4_image,
      title: "MONITORING AND CONTROL",
      subtitle:
        "It seems like you're trying to pass the image1 variable incorrectly as the imageUrl prop in your Psycho component. Instead of wrapping image1 in curly braces within the imageUrl property, you should directly pass image1 as the value. Here's the corrected version of your Psycho component:",
      arrow_type_: arrows_1,
    },
  ];
  const [sections, setSections] = useState([]);
  const [quizeBanners, setQuizeBanners] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        console.log("ScrollY" + scrollY);
        console.log("Offset" + offset);
        console.log("Height" + height);

        if (scrollY >= offset && scrollY < offset + height) {
          section.classList.add("show_animate");
        } else {
          section.classList.remove("show_animate");
        }
      });

      quizeBanners.forEach((banner) => {
        const offset = banner.offsetTop;
        const height = banner.offsetHeight;
        console.log("ScrollY" + scrollY);
        console.log("Offset" + offset);
        console.log("Height" + height);

        if (scrollY >= offset && scrollY < offset + height) {
          const customSection = document.querySelector(".arrow_down");
          customSection.classList.add("show_animate");
        }
      });
    };

    const sections = document.querySelectorAll(".quizebanner"); // Change the selector as per your HTML structure
    setSections(sections);

    const quizeBanners = document.querySelectorAll(".text_heading"); // Change the selector for quize banners
    setQuizeBanners(quizeBanners);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="devition_section">
        <img src={div_sec_image} alt=""></img>
        <h1>Quizzes and Self-Assessments</h1>
      </div>
      <div className="text_heading">
        <h6>NEW</h6> <h6>DEPRESSION</h6> <h6>ANXIETY</h6> <h6>AUTISM</h6>
        <h6>ADHD</h6> <h6>PERSONALITY</h6> <h6>DISORDERS</h6> <h6>OTHER</h6>
        <h6>CONDITIONS </h6> <h6>LIFESTYLE</h6> <h6>RESOURCES</h6>
        <h6>FIND A THERAPIST</h6>
      </div>
      <p className="bar">
        Psych Central's quizzes and self-assessments are not diagnostic tools,
        but medically-reviewed assessments to help individuals assess their
        well-being and determine if a professional consultation is needed, not a
        diagnostic tool.
      </p>
      <p className="bar">----------------</p>
      <div className="arrow_down">
        <img src={arrows_4} alt="arrow down"></img>
      </div>

      <div className="quizebanner">
        <div className="content_cards">
          <div className="main_cont">
            <div className="cont_image">
              <img src={cont_1_image} alt="card_image" />
            </div>
            <div className="cont_details">
              <h1>INITIAL EVALUATION</h1>
              <h4>
                It seems like you're trying to pass the image1 variable
                incorrectly as the imageUrl prop in your Psycho component.
                Instead of wrapping image1 in curly braces within the imageUrl
                property, you should directly pass image1 as the value. Here's
                the corrected version of your Psycho component:
              </h4>
            </div>
            <div class="area">
              <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="arrows">
            <img src={arrows_1} alt="arrows path"></img>
          </div>
        </div>
      </div>

      <div className="quizebanner">
        <div className="content_cards">
          <div className="main_cont">
            <div className="cont_details">
              <h1>MEDICAL CONSULTATION</h1>
              <h4>
                It seems like you're trying to pass the image1 variable
                incorrectly as the imageUrl prop in your Psycho component.
                Instead of wrapping image1 in curly braces within the imageUrl
                property, you should directly pass image1 as the value. Here's
                the corrected version of your Psycho component:
              </h4>
            </div>
            <div className="cont_image">
              <img src={cont_2_image} alt="card_image" />
            </div>
            <div class="area">
              <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="arrows">
            <img src={arrows_2} alt="arrows path"></img>
          </div>
        </div>
      </div>

      <div className="quizebanner">
        <div className="content_cards">
          <div className="main_cont">
            <div className="cont_image">
              <img src={cont_3_image} alt="card_image" />
            </div>
            <div className="cont_details">
              <h1>TREATMENT PLAN</h1>
              <h4>
                It seems like you're trying to pass the image1 variable
                incorrectly as the imageUrl prop in your Psycho component.
                Instead of wrapping image1 in curly braces within the imageUrl
                property, you should directly pass image1 as the value. Here's
                the corrected version of your Psycho component:
              </h4>
            </div>
            <div class="area">
              <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="arrows">
            <img src={arrows_3} alt="arrows path"></img>
          </div>
        </div>
      </div>

      <div className="quizebanner">
        <div className="content_cards">
          <div className="main_cont">
            <div className="cont_details">
              <h1>MONITORING AND CONTROL</h1>
              <h4>
                It seems like you're trying to pass the image1 variable
                incorrectly as the imageUrl prop in your Psycho component.
                Instead of wrapping image1 in curly braces within the imageUrl
                property, you should directly pass image1 as the value. Here's
                the corrected version of your Psycho component:
              </h4>
            </div>
            <div className="cont_image">
              <img src={cont_4_image} alt="card_image" />
            </div>
            <div class="area">
              <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="arrows">
            <img src={arrows_2} alt="arrows path"></img>
          </div>
        </div>
      </div>

      <div className="title">
        <span>NEW QUIZZES</span>
      </div>

      <div className="cardBox">
        <ul className="quize_ul">
          {bookings.map((booking, index) => (
            <BookingCard
              key={index} // Always include a unique key when rendering lists
              imageUrl={booking.imageUrl}
              title={booking.title}
              subTitle={booking.subTitle}
              info={booking.info}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Psycho;
