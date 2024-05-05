import "./self.css";
import Talk from "./img_self/Talk.jpg";
import phy_health from "./img_self/phy_health.jpg";
import activities from "./img_self/activities.jpg";
import stayaway from "./img_self/stayaway.jpg";
import think from "./img_self/think.jpg";
import React, { useEffect, useState } from "react";

export const Self = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setIsScrolled(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBodyClick = () => {
    const checkbox = document.getElementById("nav_check");

    checkbox.checked = false;
  };

  return (
    <div className="boody" onClick={handleBodyClick}>
      <div className="container-card">
        <div className="menus">
          <div className={isScrolled ? "steps" : "steps"}>
            <ol>
              <span>Table of Contents</span>
              <li>
                <button onClick={() => scrollToSection("0")}>
                  What is good mental health?
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("1")}>
                  Talk to Someone You Trust
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("2")}>
                  Look After Your Physical Health
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("3")}>
                  Do Activities That You Enjoy
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("4")}>
                  Steer Away From Harmful Substances
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("5")}>
                  Take Two Minutes to Focus On The World Around You
                </button>
              </li>
            </ol>
          </div>
        </div>
        <div className="card">
          <span>HOME &#62; FOR YOURSELF </span>
          <div className="Name">
            <div id="0">
              <h1>What is good mental health?</h1>
              <ul>
                <li>
                  Not only should we take care of our mental health when we are
                  having difficulties or when we are depressed, worried, or
                  stressed. As with our physical health, it's something we
                  should genuinely consider and care about deeply.
                </li>
                <li>
                  It benefits us now and in the future to take care of our
                  mental health since it will help us handle challenging
                  situations. We may experience a decreased likelihood of
                  physical health issues in the long run.
                </li>
                <li>
                  Our mental health and wellbeing can be maintained in many ways
                  on a daily basis; start by implementing these 5 highly
                  recommended strategies.
                </li>
              </ul>
            </div>

            <div id="1">
              <h1>Talk to Someone You Trust</h1>
              <div className="center">
                <img src={Talk} alt="t" />
              </div>

              <ul>
                <li>
                  <strong>Seeking Support: </strong> Talking to someone you
                  trust - whether a friend, a family member, or a colleague -
                  can help.
                </li>
                <li>
                  <strong>Emotional Well-being: </strong> You may feel better if
                  you are able to openly share what you are going through with
                  someone who cares about you.
                </li>
                <li>
                  <strong>Maintaining Connection: </strong> If you live in an
                  area where face-to-face interactions are limited, you can
                  still stay connected with your loved ones through a video
                  call, phone call, or messaging app.
                </li>
              </ul>
            </div>

            <div id="2">
              <h1>Look After Your Physical Health</h1>

              <div className="center">
                <img src={phy_health} alt="ul" />
              </div>
              <ul>
                <li>
                  <strong>Taking care of your physical health: </strong> Taking
                  care of your physical health helps improve your mental health
                  and well-being.
                </li>
                <li>
                  <strong>Physical activity: </strong> Be active for at least 30
                  minutes daily, whether that's running, walking, yoga, dancing,
                  cycling, or even gardening.
                </li>

                <li>
                  <strong>Eat a balanced and healthy diet</strong>sdf
                </li>
                <li>
                  <strong>The importance of adequate sleep</strong>sdfs
                </li>
              </ul>
            </div>

            <div id="3">
              <h1>Do Activities That You Enjoy</h1>
              <div className="center">
                <img src={activities} alt="a" />
              </div>
              <ul>
                <li>
                  <strong>
                    Activities that are meaningful and enjoyable:{" "}
                  </strong>
                  Try to continue doing the activities that you find meaningful
                  and enjoyable, such as cooking for yourself or your loved
                  ones, playing with your pet, walking in the park, reading a
                  book, or watching a film or TV series.
                </li>
                <li>
                  Maintaining good mental health through a regular routine.
                </li>
              </ul>
            </div>

            <div id="4">
              <h1>Steer Away From Harmful Substances</h1>
              <div className="center">
                <img src={stayaway} alt="s" />
              </div>
              <ul>
                <li>
                  <strong>Avoiding harmful substances: </strong> Don't use
                  harmful substances such as drugs, kava, alcohol or tobacco to
                  cope with what you're feeling.
                </li>
                <li>
                  <strong>
                    Short-term relief vs. long-term consequences:{" "}
                  </strong>
                  Though these may seem to help you feel better in the short
                  term, they can make you feel worse in the long run.
                </li>
                <li>
                  <strong>
                    Dangers and risks associated with harmful substances:
                  </strong>
                  These substances are also dangerous and can put you and those
                  around you at risk of diseases or injuries.
                </li>
              </ul>
            </div>

            <div id="5">
              <h1>Take Two Minutes to Focus On The World Around You</h1>
              <div className="center">
                <img src={think} alt="t" />
              </div>
              <ul>
                <li>
                  <strong>Calming racing thoughts: </strong> To calm your racing
                  thoughts, bring yourself back to the present moment.
                </li>
                <li>
                  <strong>
                    Techniques for grounding in the present moment:
                  </strong>
                  You can do this by watching the video below or simply by
                  taking three deep breaths, feel your feet grounded on the
                  floor...
                </li>
                <li>
                  <strong>Sensory awareness and mindfulness</strong>
                  <br />
                  ✅ What are five things I can see? <br />
                  ✅ What are four things I can hear? <br />
                  ✅ What can I smell? <br />
                  ✅ What does it feel like to touch my knees or a something
                  else I can reach? <br />
                  ✅How does it feel underneath my fingers?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
