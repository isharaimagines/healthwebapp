import "./about.css";
import aboutimg from "../assets/img/team_about.png";

export const About = () => {
  const handleBodyClick = () => {
    const checkbox = document.getElementById("nav_check");

    checkbox.checked = false;
  };
  return (
    <>
      <div className="section" onClick={handleBodyClick}>
        <div className="all">
          <div className="main_banner">
            <div className="text_left">
              <span>
                Our purpose is to assist you with establishing balance and
                making mental wellness an important concern.
              </span>
              <p>
                'With me Peace' is a dedicated mental health and wellness
                platform that offers support in all aspects of life, including
                managing stress, improving relationships, and exploring
                psychology theories. With a team of experts, licensed
                therapists, board-certified psychiatrists, and the latest
                studies, they aim to provide clear and actionable guidance for
                individuals with mental health conditions, stress management,
                and relationship enhancement. <br></br>
                <br></br>However, they acknowledge that research is not the
                whole story and has implicit biases that don't capture the full
                spectrum of lived experiences. They promise to continue learning
                and putting diverse voices at the forefront to help fill in
                these gaps. 'With me Peace' aims to empower individuals to show
                up as their best self.
              </p>
            </div>
            <div className="banner_right">
              <img src={aboutimg} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
