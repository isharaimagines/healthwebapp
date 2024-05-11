import React, { useEffect } from "react";
import "./psyQuizzes.css";
import "./boxhover.css";
import gifanimation from "../assets/img/Animation.gif";
import image1 from "../assets/img/smiling-professional.jpeg";
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

  useEffect(() => {
    function handleScroll() {
      const value = window.scrollY * 1.1; // Apply the multiplier
      console.log(value);
      // Find the target element
      const targetElement = document.querySelector(".title");

      // Check if the target element exists
      if (targetElement) {
        // Check if scrollY is within a specific range
        if (value >= 250) {
          // Add the class to the target element
          targetElement.classList.add("new-class");
        } else {
          // Remove the class from the target element if not in the range
          targetElement.classList.remove("new-class");
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

      <div className="quizebanner">
        <div className="content_cards">
          <div className="main_cont">
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
        </div>
      </div>

      <div className="title">
        <h1>NEW QUIZZES</h1>
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
