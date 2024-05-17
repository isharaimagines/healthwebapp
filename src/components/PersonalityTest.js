import "./PersonalityTest.css";
import React, { useState, useEffect } from "react";

export const PersonalityTest = () => {
  const [answers, setAnswers] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const [message, setMessage] = useState("");
  const [description, setdescript] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleChange = (questionId, answerValue) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerValue,
    }));
  };

  const handleSubmit = (event) => {
    const button = document.getElementById("submit_btn");
    if (button) {
      // Set the opacity to 0
      button.style.opacity = "0";
    }
    event.preventDefault();
    let total = 0;
    for (let key in answers) {
      total += parseInt(answers[key]);
    }
    setSubtotal(total);

    if (total <= 20) {
      setMessage("The Shy Worrier");
      setdescript(
        "People think you are shy, nervous, and indecisive, someone who needs looking after, who always wants someone else to make the decisions &who doesn't want to get involved with anyone or anything! They see you as a worrier who always sees problems that don't exist. Some people think you're boring. Only those who know you well know that you aren't."
      );
    } else if (total > 20 && total <= 30) {
      setMessage("The Careful Plodder");
      setdescript("");
    } else if (total > 30 && total <= 40) {
      setMessage("The Loyal Friend");
      setdescript("");
    } else if (total > 40 && total <= 50) {
      setMessage("The Lively Center of Attention");
      setdescript("");
    } else if (total > 50 && total <= 60) {
      setMessage("The Natural Leader");
      setdescript("");
    } else if (total > 60) {
      setMessage("The Vain, Self-Centered Leader");
      setdescript("");
    } else {
      setMessage("none");
      setdescript("");
    }
  };

  return (
    <>
      <div className="quize_background">
        <div className="background_title">
          <h1>Personality Test</h1>
        </div>
        <div className="background_explain">
          <p>
            Personality tests using quizzes can provide a lot of insights about
            yourself and can be used in various ways. Here’s a brief
            explanation:
            <ul>
              <li>
                <b>Self-Understanding</b> These tests can help you understand
                your own personality better. They can reveal your strengths,
                weaknesses, motivations, preferences, and beliefs1.
              </li>
              <li>
                <b>Career Guidance</b> Personality tests can guide you towards
                careers that suit your personality type. For example, the
                Myers-Briggs Type Indicator (MBTI) is often used to match
                personality types with suitable careers2.
              </li>
              <li>
                <b>Team Building</b> In a workplace setting, these tests can be
                used to balance teams, optimize management approaches, and
                improve team building1. They can help identify how different
                team members work and interact, which can lead to more effective
                collaboration.
              </li>
              <li>
                <b>Personal Growth</b> By understanding your personality traits,
                you can work on areas of improvement and leverage your strengths
                for personal and professional growth31.
              </li>
              <li>
                <b>Relationships</b> Understanding your personality type and the
                personality types of others can improve your relationships. It
                can help you understand why you get along with certain people
                and why you might clash with others1.
              </li>
            </ul>
          </p>
        </div>
        <div className="instructions">
          <h1>Instructions</h1>
          <p>
            Answer each of the questions below honestly about yourself and we’ll
            score the quiz and let you know how others see you.
          </p>
        </div>
        <div className="quiz-container">
          <h1>Quiz</h1>

          <form onSubmit={handleSubmit}>
            <form className="questions">
              <h2>1. I feel most energetic and focused</h2>
              <div class="inputGroup">
                <input
                  id="radio1"
                  name="radio"
                  type="radio"
                  value="2"
                  onChange={() => handleChange(1, "2")}
                />
                <label for="radio1">In the morning</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio2"
                  name="radio"
                  type="radio"
                  value="4"
                  onChange={() => handleChange(1, "4")}
                />
                <label for="radio2">
                  During the afternoon and early evening
                </label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio3"
                  name="radio"
                  type="radio"
                  value="6"
                  onChange={() => handleChange(1, "6")}
                />
                <label for="radio3">Late at night</label>
              </div>
            </form>

            <form className="questions">
              <h2>2. When I walk, I tend to do it</h2>
              <div class="inputGroup">
                <input
                  id="radio4"
                  name="radio"
                  type="radio"
                  value="6"
                  onChange={() => handleChange(2, "6")}
                />
                <label for="radio4">Fairly fast, with long steps</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio5"
                  name="radio"
                  type="radio"
                  value="4"
                  onChange={() => handleChange(2, "4")}
                />
                <label for="radio5">Fairly fast, with small steps</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio6"
                  name="radio"
                  type="radio"
                  value="7"
                  onChange={() => handleChange(2, "7")}
                />
                <label for="radio6">
                  Less fast, head up, looking the world in the face
                </label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio7"
                  name="radio"
                  type="radio"
                  value="2"
                  onChange={() => handleChange(2, "2")}
                />
                <label for="radio7">Less fast, head down</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio8"
                  name="radio"
                  type="radio"
                  value="1"
                  onChange={() => handleChange(2, "1")}
                />
                <label for="radio8">Very slowly</label>
              </div>
            </form>

            <form className="questions">
              <h2>3. When you speak to people, you tend to</h2>
              <div class="inputGroup">
                <input
                  id="radio9"
                  name="radio"
                  type="radio"
                  value="6"
                  onChange={() => handleChange(3, "4")}
                />
                <label for="radio9">Stand with your arms folded</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio10"
                  name="radio"
                  type="radio"
                  value="4"
                  onChange={() => handleChange(3, "2")}
                />
                <label for="radio10">Have your hands clasped</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio11"
                  name="radio"
                  type="radio"
                  value="7"
                  onChange={() => handleChange(3, "5")}
                />
                <label for="radio11">
                  Have one or both of your hands on your hips
                </label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio12"
                  name="radio"
                  type="radio"
                  value="2"
                  onChange={() => handleChange(3, "7")}
                />
                <label for="radio12">
                  Touch or push the person to whom you are talking
                </label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio13"
                  name="radio"
                  type="radio"
                  value="1"
                  onChange={() => handleChange(3, "6")}
                />
                <label for="radio13">
                  Play with your ear or hair, touch your chin, or smooth your
                  hair
                </label>
              </div>
            </form>

            <form className="questions">
              <h2>4. When you’re relaxed, you usually sit with</h2>
              <div class="inputGroup">
                <input
                  id="radio14"
                  name="radio"
                  type="radio"
                  value="4"
                  onChange={() => handleChange(4, "4")}
                />
                <label for="radio14">
                  Your knees bent, with your legs neatly side by side
                </label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio15"
                  name="radio"
                  type="radio"
                  value="6"
                  onChange={() => handleChange(4, "6")}
                />
                <label for="radio15">Your legs crossed</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio16"
                  name="radio"
                  type="radio"
                  value="2"
                  onChange={() => handleChange(4, "2")}
                />
                <label for="radio16">Your legs stretched out or straight</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio17"
                  name="radio"
                  type="radio"
                  value="1"
                  onChange={() => handleChange(4, "1")}
                />
                <label for="radio17">One leg curled under you</label>
              </div>
            </form>

            <form className="questions">
              <h2>5. When you find something really funny, you usually give</h2>
              <div class="inputGroup">
                <input
                  id="radio18"
                  name="radio"
                  type="radio"
                  value="6"
                  onChange={() => handleChange(5, "6")}
                />
                <label for="radio18">A big, appreciative laugh</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio19"
                  name="radio"
                  type="radio"
                  value="4"
                  onChange={() => handleChange(5, "4")}
                />
                <label for="radio19">A laugh, but not a loud one</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio20"
                  name="radio"
                  type="radio"
                  value="3"
                  onChange={() => handleChange(5, "3")}
                />
                <label for="radio20">A quiet chuckle</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio21"
                  name="radio"
                  type="radio"
                  value="2"
                  onChange={() => handleChange(5, "2")}
                />
                <label for="radio21">A sheepish smile</label>
              </div>
            </form>

            <form className="questions">
              <h2>
                6. When you enter a party or social gathering, you tend to
              </h2>
              <div class="inputGroup">
                <input
                  id="radio22"
                  name="radio"
                  type="radio"
                  value="6"
                  onChange={() => handleChange(6, "6")}
                />
                <label for="radio22">
                  Make a loud entrance, so that everyone notices you
                </label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio23"
                  name="radio"
                  type="radio"
                  value="4"
                  onChange={() => handleChange(6, "4")}
                />
                <label for="radio23">
                  Make a quiet entrance, looking around for someone you know
                </label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio24"
                  name="radio"
                  type="radio"
                  value="2"
                  onChange={() => handleChange(6, "2")}
                />
                <label for="radio24">
                  Make the quietest entrance, trying to stay unnoticed
                </label>
              </div>
            </form>

            <form className="questions">
              <h2>
                7. If you’re focused on a task and you’re interrupted, you’re
                likely to
              </h2>
              <div class="inputGroup">
                <input
                  id="radio25"
                  name="radio"
                  type="radio"
                  value="6"
                  onChange={() => handleChange(7, "6")}
                />
                <label for="radio25">Welcome the break</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio26"
                  name="radio"
                  type="radio"
                  value="2"
                  onChange={() => handleChange(7, "2")}
                />
                <label for="radio26">Feel extremely irritated</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio27"
                  name="radio"
                  type="radio"
                  value="4"
                  onChange={() => handleChange(7, "4")}
                />
                <label for="radio27">Vary between these two extremes</label>
              </div>
            </form>

            <form className="questions">
              <h2>8. Your favorite color is</h2>
              <div class="inputGroup">
                <input
                  id="radio28"
                  name="radio"
                  type="radio"
                  value="6"
                  onChange={() => handleChange(8, "6")}
                />
                <label for="radio28">Red/orange</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio29"
                  name="radio"
                  type="radio"
                  value="7"
                  onChange={() => handleChange(8, "7")}
                />
                <label for="radio29">Black</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio30"
                  name="radio"
                  type="radio"
                  value="5"
                  onChange={() => handleChange(8, "5")}
                />
                <label for="radio30">Yellow/light blue</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio31"
                  name="radio"
                  type="radio"
                  value="4"
                  onChange={() => handleChange(8, "4")}
                />
                <label for="radio31">Green</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio32"
                  name="radio"
                  type="radio"
                  value="3"
                  onChange={() => handleChange(8, "3")}
                />
                <label for="radio32">Dark blue/purple</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio33"
                  name="radio"
                  type="radio"
                  value="2"
                  onChange={() => handleChange(8, "2")}
                />
                <label for="radio33">White</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio34"
                  name="radio"
                  type="radio"
                  value="1"
                  onChange={() => handleChange(8, "1")}
                />
                <label for="radio34">Brown/gray</label>
              </div>
            </form>

            <form className="questions">
              <h2>9. Before you fall asleep, you’re usually lying</h2>
              <div class="inputGroup">
                <input
                  id="radio35"
                  name="radio"
                  type="radio"
                  value="7"
                  onChange={() => handleChange(9, "7")}
                />
                <label for="radio35">Stretched out on your back</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio36"
                  name="radio"
                  type="radio"
                  value="6"
                  onChange={() => handleChange(9, "6")}
                />
                <label for="radio36">
                  Stretched out face down on your stomach
                </label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio37"
                  name="radio"
                  type="radio"
                  value="4"
                  onChange={() => handleChange(9, "4")}
                />
                <label for="radio37">On your side, slightly curled</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio38"
                  name="radio"
                  type="radio"
                  value="2"
                  onChange={() => handleChange(9, "2")}
                />
                <label for="radio38">With your head on one arm</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio39"
                  name="radio"
                  type="radio"
                  value="1"
                  onChange={() => handleChange(9, "1")}
                />
                <label for="radio39">With your head under the covers</label>
              </div>
            </form>

            <form className="questions">
              <h2>10. When you dream, you’re often</h2>
              <div class="inputGroup">
                <input
                  id="radio40"
                  name="radio"
                  type="radio"
                  value="4"
                  onChange={() => handleChange(10, "4")}
                />
                <label for="radio40">Falling</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio41"
                  name="radio"
                  type="radio"
                  value="2"
                  onChange={() => handleChange(10, "2")}
                />
                <label for="radio41">Fighting or struggling</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio42"
                  name="radio"
                  type="radio"
                  value="3"
                  onChange={() => handleChange(10, "3")}
                />
                <label for="radio42">Searching for something or somebody</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio43"
                  name="radio"
                  type="radio"
                  value="5"
                  onChange={() => handleChange(10, "5")}
                />
                <label for="radio43">Flying or floating</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio44"
                  name="radio"
                  type="radio"
                  value="6"
                  onChange={() => handleChange(10, "6")}
                />
                <label for="radio44">You usually have dreamless sleep</label>
              </div>
              <div class="inputGroup">
                <input
                  id="radio45"
                  name="radio"
                  type="radio"
                  value="1"
                  onChange={() => handleChange(10, "1")}
                />
                <label for="radio45">Your dreams are always pleasant</label>
              </div>
            </form>

            <button
              type="submit"
              id="submit_btn"
              onClick={handleClick}
              style={{ opacity: isClicked ? 0 : 1 }}
            >
              Submit
            </button>
          </form>
          {subtotal > 0 && (
            <div className="result">
              <h4>YOUR RESULT</h4>
              <span>Personality Test Quiz</span>
              <h1>{message}</h1>
              <h4>score {subtotal + 36}/100</h4>
              <span>Summary</span>
              <p>{description}</p>

              <div className="alert">
                <p>
                  Disclaimer: This quiz is for entertainment purposes only. In
                  no way is this an empirically validated test. The concepts
                  presented are not rooted in any known research.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
