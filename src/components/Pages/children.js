import "./self.css";
import children_intro from "./img_child/children_intro.jpg";
import determinants from "./img_child/determinants.jpg";
import Behavioural from "./img_child/Behavioural.jpg";
import eating from "./img_child/eating.jpg";
import self_harm from "./img_child/self-harm.jpg";
import family_1 from "./img_child/family_1.jpg";
import React, { useEffect, useState } from "react";

export const Child = () => {
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

  return (
    <div className="boody">
      <div className="container-card">
        <div className="menus">
          <div className={isScrolled ? "steps" : "steps"}>
            <ol>
              <span>Table of Contents</span>
              <li>
                <a href="#1">Introduction</a>
              </li>
              <li>
                <a href="#2">Mental health determinants</a>
              </li>
              <li>
                <a href="#3">Emotional disorders</a>
              </li>
              <li>
                <a href="#4">Behavioural disorders</a>
              </li>
              <li>
                <a href="#5">Eating disorders</a>
              </li>
              <li>
                <a href="#6">Psychosis</a>
              </li>
              <li>
                <a href="#7">Suicide and self-harm</a>
              </li>
              <li>
                <a href="#8">Risk-taking behaviours</a>
              </li>
              <li>
                <a href="#9">Promotion and prevention</a>
              </li>
              <li>
                <a href="#10">Early detection and treatment</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="card">
          <span>HOME &#62; FOR CHILDREN </span>
          <div className="Name">
            <div id="1">
              <h1>Introduction</h1>
              <div className="center">
                <img src={children_intro} alt="c" />
              </div>
              <ul>
                <li>
                  One in six people are aged 10-19 years. Adolescence is a
                  unique and formative time. Physical, emotional and social
                  changes, including exposure to poverty, abuse, or violence,
                  can make adolescents vulnerable to mental health problems.
                  Protecting adolescents from adversity, promoting
                  socio-emotional learning and psychological well-being, and
                  ensuring access to mental health care are critical for their
                  health and well-being during adolescence and adulthood.
                </li>
                <li>
                  Globally, it is estimated that 1 in 7 (14%) 10–19 year-olds
                  experience mental health conditions (1), yet these remain
                  largely unrecognized and untreated.
                </li>
                <li>
                  Adolescents with mental health conditions are particularly
                  vulnerable to social exclusion, discrimination, stigma
                  (affecting readiness to seek help), educational difficulties,
                  risk-taking behaviours, physical ill-health and human rights
                  violations.
                </li>
              </ul>
            </div>

            <div id="2">
              <h1>Mental health determinants</h1>
              <div className="center">
                <img src={determinants} alt="d" />
              </div>
              <ul>
                <li>
                  Adolescence is a critical period for developing social and
                  emotional habits, such as healthy sleep, exercise, coping,
                  problem-solving, and emotional management. It is crucial to
                  have supportive environments in family, school, and the
                  community.
                </li>
                <li>
                  Mental health is influenced by various factors, including
                  exposure to adversity, pressure to conform, and exploration of
                  identity. Media influence and gender norms can exacerbate the
                  gap between an adolescent's reality and their aspirations.
                  Home life and relationships with peers are also important
                  determinants.
                </li>
                <li>
                  Violence, harsh parenting, and socioeconomic problems are
                  recognized risks to mental health. Some adolescents are at
                  greater risk due to living conditions, stigma, discrimination,
                  or lack of access to quality support and services. These
                  include those living in humanitarian settings, those with
                  chronic illnesses, those pregnant, orphans, and those from
                  minority ethnic or sexual backgrounds.
                </li>
              </ul>
            </div>

            <div id="3">
              <h1>Emotional disorders</h1>
              <ul>
                <li>
                  Emotional disorders are common among adolescents. Anxiety
                  disorders (which may involve panic or excessive worry) are the
                  most prevalent in this age group and are more common among
                  older than among younger adolescents. It is estimated that
                  3.6% of 10-14-year-olds and 4.6% of 15-19-year-olds experience
                  an anxiety disorder. Depression is estimated to occur among
                  1.1% of adolescents aged 10-14 years, and 2.8% of
                  15-19-year-olds. Depression and anxiety share some of the same
                  symptoms, including rapid and unexpected changes in mood.
                </li>
                <li>
                  Anxiety and depressive disorders can profoundly affect school
                  attendance and schoolwork. Social withdrawal can exacerbate
                  isolation and loneliness. Depression can lead to suicide.
                </li>
              </ul>
            </div>

            <div id="4">
              <h1>Behavioural disorders</h1>
              <div className="center">
                <img src={Behavioural} alt="B" />
              </div>
              <ul>
                <li>
                  Younger adolescents are more likely to suffer from behavioral
                  disorders, such as ADHD and conduct disorder. ADHD affects
                  3.1% of 10-14-year-olds and 2.4% of 15-19-year-olds, while
                  conduct disorder involves destructive or challenging behavior.
                  These disorders can impact adolescents' education and
                  potentially lead to criminal behavior.
                </li>
              </ul>
            </div>

            <div id="5">
              <h1>Eating disorders</h1>
              <div className="center">
                <img src={eating} alt="e" />
              </div>
              <ul>
                <li>
                  Eating disorders, such as anorexia nervosa and bulimia
                  nervosa, commonly emerge during adolescence and young
                  adulthood. Eating disorders involve abnormal eating behaviour
                  and preoccupation with food, accompanied in most instances by
                  concerns about body weight and shape. Anorexia nervosa can
                  lead to premature death, often due to medical complications or
                  suicide, and has higher mortality than any other mental
                  disorder.
                </li>
              </ul>
            </div>

            <div id="6">
              <h1>Psychosis</h1>
              <ul>
                <li>
                  Conditions that include symptoms of psychosis most commonly
                  emerge in late adolescence or early adulthood. Symptoms can
                  include hallucinations or delusions. These experiences can
                  impair an adolescent’s ability to participate in daily life
                  and education and often lead to stigma or human rights
                  violations.
                </li>
              </ul>
            </div>

            <div id="7">
              <h1>Suicide and self-harm</h1>
              <div className="center">
                <img src={self_harm} alt="s" />
              </div>
              <ul>
                <li>
                  Suicide is the fourth leading cause of death in older
                  adolescents (15–19 years) (2). Risk factors for suicide are
                  multifaceted, and include harmful use of alcohol, abuse in
                  childhood, stigma against help-seeking, barriers to accessing
                  care and access to means of suicide. Digital media, like any
                  other media, can play a significant role in either enhancing
                  or weakening suicide prevention efforts.
                </li>
              </ul>
            </div>

            <div id="8">
              <h1>Risk-taking behaviours</h1>
              <ul>
                <li>
                  Adolescence is a critical period for risk-taking behaviors,
                  including substance use and sexual risk-taking. These
                  behaviors can negatively impact an adolescent's mental and
                  physical well-being. Heavy episodic drinking among adolescents
                  aged 15-19 is prevalent globally, with males being most at
                  risk. Tobacco and cannabis use are also significant concerns,
                  with many adult smokers starting their first cigarette before
                  18. Perpetration of violence can increase the likelihood of
                  low educational attainment, injury, crime involvement, or
                  death. Interpersonal violence was ranked among the leading
                  causes of death in older adolescent boys in 2019.
                </li>
              </ul>
            </div>

            <div id="9">
              <h1>Promotion and prevention</h1>
              <ul>
                <li>
                  Mental health promotion and prevention interventions aim to
                  enhance an individual's emotional regulation, reduce
                  risk-taking behaviors, build resilience, and promote
                  supportive social environments. These programs require a
                  multi-level approach, using various platforms and strategies
                  to reach adolescents, particularly the most vulnerable, such
                  as digital media, health care settings, schools, and the
                  community.
                </li>
              </ul>
            </div>

            <div id="10">
              <h1>Early detection and treatment</h1>
              <div className="center">
                <img src={family_1} alt="f1" />
              </div>
              <ul>
                <li>
                  Mental health promotion and prevention interventions aim to
                  enhance an individual's emotional regulation, reduce
                  risk-taking behaviors, build resilience, and promote
                  supportive social environments. These programs require a
                  multi-level approach, using various platforms and strategies
                  to reach adolescents, particularly the most vulnerable, such
                  as digital media, health care settings, schools, and the
                  community.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
