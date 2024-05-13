import React, { useEffect } from "react";
import "./Psycho.css";
import gifanimation from "../assets/img/Animation.gif";
import image1 from "../assets/img/smiling-professional.jpeg";
import div_sec_image from "../assets/img/banner_sec_Quize.png";

const BookingCard = ({ imageUrl, title, subTitle }) => (
  <li className="booking-card">
    <div className="book-container">
      <img src={imageUrl} alt="banner" />
    </div>
    <div className="informations-container">
      <h2>{title}</h2>

      <h3>{subTitle}</h3>
      <button class="learn-more"> Learn More</button>
    </div>
  </li>
);

export const Psycho = () => {
  const bookings = [
    {
      imageUrl: image1,
      title: "Personality Test",
      subTitle:
        "Personality tests are tools used to assess various aspects of an individual's character, behavior, and preferences. They typically involve answering a series of questions about yourself, your habits, and your feelings. Based on your responses, the test generates a profile that categorizes you into different personality types or traits. These tests can be helpful for self-discovery, understanding relationships, career planning, and personal development.",
    },
    {
      imageUrl: image1,
      title: "Personality Test",
      subTitle:
        "To determine your personality type, you can take our personality test.",
    },
    {
      imageUrl: image1,
      title: "Personality Test",
      subTitle:
        "To determine your personality type, you can take our personality test.",
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
      <div className="quizebanner">
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
          well-being and determine if a professional consultation is needed, not
          a diagnostic tool.
        </p>

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
      </div>
    </>
  );
};

export default Psycho;
