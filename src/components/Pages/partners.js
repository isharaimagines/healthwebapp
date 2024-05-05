import "./self.css";
import writing_self from "./img_part/writing_self_1.jpg";
import thinking_try from "./img_part/thinking_try.jpg";
import others from "./img_part/others.jpg";
import confilet from "./img_part/confilet.jpg";
import React, { useEffect, useState } from "react";

export const Partners = () => {
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
                <button onClick={() => scrollToSection("1")}>
                  Maintaining healthy relationships and mental wellbeing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("2")}>
                  Ways to build a healthy relationship with yourself
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("3")}>
                  Try positive thinking
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("4")}>
                  Ways to build healthy relationships with others
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("5")}>
                  Healthy ways to communicate in relationships
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("6")}>
                  Tips on managing stress and anxiety in relationships
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("7")}>
                  Dealing with relationship conflicts
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("8")}>
                  Questions to help manage conflict
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("9")}>
                  Leaving an unhealthy relationship
                </button>
              </li>
            </ol>
          </div>
        </div>
        <div className="card">
          <span>HOME &#62; FOR PARTNERS </span>
          <div className="Name">
            <div id="1">
              <h1>Maintaining healthy relationships and mental wellbeing</h1>
              <ul>
                <li>
                  Relationships are essential to our mental health, especially
                  the one we have with ourselves. Healthy, supportive
                  connections increase a person's likelihood of happiness and
                  health.
                </li>

                <li>
                  Building and sustaining strong relationships with others can
                  help people overcome loneliness and deal with mental health
                  problems like anxiety and depression.
                </li>

                <li>
                  Find out more about how to create and maintain healthy
                  relationships as well as how to handle problems like stress
                  and anxiety in them.
                </li>
              </ul>
            </div>

            <div id="2">
              <h1>Ways to build a healthy relationship with yourself</h1>
              <div className="center">
                <img src={writing_self} alt="w" />
              </div>
              <ul>
                <li>
                  Let's start with you because it's important to remember and
                  take care of your relationship with yourself.
                </li>
                <li>
                  The way we view ourselves and how highly we value ourselves
                  has an impact on how well we take care of ourselves and how
                  resilient we may become.
                </li>
                <li>
                  Fortunately, there are several simple things we can do to
                  raise our self-esteem, such as thinking positively.
                </li>
              </ul>
            </div>

            <div id="3">
              <h1>Try positive thinking</h1>
              <div className="center">
                <img src={thinking_try} alt="t" />
              </div>
              <ul>
                <li>
                  Our thoughts are frequently automatic and go unnoticed, but
                  being aware of them and determining whether they are pleasant
                  or negative may be really beneficial.
                </li>
                <li>
                  Try confronting your negative or unproductive thoughts and
                  shifting to a more constructive frame of mind. It can
                  significantly boost self-assurance.
                </li>
                <li>
                  Finding neutral alternatives could feel more realistic than
                  thinking only optimistically all the time. An example of a
                  negative mindset is, "I had a lot of things to do, yet I did
                  nothing. One that is impartial or realistic, such as: "Not
                  every day can be good, but that's OK because I can try again
                  tomorrow," can be substituted with "I'm useless."
                </li>
                <li>
                  Having a more objective perspective can eventually help you
                  develop a healthier and more fulfilling connection with
                  yourself.
                </li>
              </ul>
            </div>

            <div id="4">
              <h1>Ways to build healthy relationships with others</h1>
              <div className="center">
                <img src={others} alt="o" />
              </div>
              <ul>
                <li>
                  To establish and maintain healthy relationships, we must put
                  out effort. Having open and honest interactions as well as
                  showing respect for and supporting others are essential
                  components of healthy partnerships.
                </li>
                <li>
                  Being able to express yourself honestly and then listening to
                  your partner, friend, or family member can improve
                  communication, lessen relationship anxiety, and assist to
                  safeguard your mental health.
                </li>
              </ul>
            </div>

            <div id="5">
              <h1>Healthy ways to communicate in relationships</h1>
              <ul>
                <li>
                  Be a "active listener" by asking the speaker for clarification
                  if necessary or repeating back to them what they just said.
                </li>
                <li>
                  You can check your understanding of what someone is speaking
                  to you by actively listening.
                </li>
                <li>
                  Instead of letting problems fester, making an effort to check
                  in frequently might help you manage problems as they come up.
                </li>
                <li>
                  Perhaps schedule a regular time to communicate, or if it's
                  uncomfortable, put down your thoughts in a message or letter.
                </li>
              </ul>
            </div>

            <div id="6">
              <h1>Tips on managing stress and anxiety in relationships</h1>
              <ul>
                <li>
                  Relationships can be impacted by life's obstacles because
                  sometimes we experience uncomfortable emotions that pile up
                  and make us irritated, abrupt, or retreat.
                </li>
                <li>
                  Being open and honest can support you and others around you
                  while you are going through a difficult period.
                </li>
                <li>
                  It can be difficult or unpleasant for you if someone you love
                  is going through a difficult period, so it's crucial for you
                  to help them in ways that also safeguard your mental health.
                </li>
                <li>
                  Here are three quick steps you can take to ensure that you're
                  looking after yourself in your relationships...
                  <li>
                    <strong>▶️ Set boundaries </strong>
                    Think about what you feel able to help with. Try to stick
                    with this - whether it's listening or offering practical
                    help like doing the shopping.
                  </li>
                  <li>
                    <strong>⏰ Take time for ​​yourself </strong>
                    Find time to do something just for yourself. Try to focus on
                    your own hobbies and interests.
                  </li>
                  <li>
                    <strong>📣 Talk to someone you trust </strong>
                    Finding someone outside the relationship that you trust
                    enough to confide in can really help.
                  </li>
                </li>
              </ul>
            </div>

            <div id="7">
              <h1>Dealing with relationship conflicts</h1>
              <div className="center">
                <img src={confilet} alt="c" />
              </div>
              <ul>
                <li>
                  Disagreements are normal, but it can affect your mental
                  wellbeing if an argument is not resolved.
                </li>
                <li>
                  If it's difficult to talk through an issue calmly, take time
                  out and talk again when everyone involved is feeling calmer.
                </li>
              </ul>
            </div>

            <div id="8">
              <h1>Questions to help manage conflict</h1>
              <ul>
                <li>
                  Sometimes, we have strong feelings about something, think we
                  know what someone else thinks, or let our past affect what is
                  happening in the present. It can help to take a step back and
                  ask yourself the following questions:
                  <li>🔥What meaning have I given this situation?</li>
                  <li>
                    🔥Is there a difference between the facts and my opinion of
                    this situation?
                  </li>
                  <li>
                    🔥What advice would I give to somebody else in this
                    position?
                  </li>
                  <li>🔥Is there another way to look at the argument?</li>
                </li>
                <li>
                  Working through these questions with those involved might help
                  everyone to understand each other better and explore ways to
                  say or do things differently.
                </li>
              </ul>
            </div>

            <div id="9">
              <h1>Leaving an unhealthy relationship</h1>
              <ul>
                <li>
                  It's <strong>OK</strong> to leave a relationship that does not
                  feel right, or is having a negative impact on your mental
                  health and wellbeing.
                </li>
                <li>
                  There are organisations that offer advice and support on
                  dealing with the practical and financial issues of a break-up
                  or separation, such as
                  <a href="https://www.citizensadvice.org.uk/family/">
                    Citizen's Advice Bureau,
                  </a>
                  if you need it..
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
