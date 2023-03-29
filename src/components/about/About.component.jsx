import "./About.style.scss";
import AnimatedLetters from "../home/animatedLetters/Animatedletters.component";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGit,
  faDocker,
  faJenkins,
  faReact,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", "_", "m", "e", "."]}
              idx={15}
            />
          </h1>
          <p>
            I am an Analyst by profession in @HCLTech managing hybrid Active
            Directory, Users & computers, DNS records, group policy, and
            maintenance of Domain Controllers. I have been passionate about web
            development (Front-End) and self-learned HTML5, CSS3, and React.js.
          </p>
          <p align="LEFT">
            I'm also interested in DevOps and Cloud Services, I have been
            learning and implementing CI-CD pipelines through Jenkins as well as
            AWSpipeline and various other automation tools like Ansible, and Git
            for the version control systems. I have created AWS CI CD projects
            integrated with AWS CodeCommit, CodeBuild and CodePipeline.
          </p>
          <p>
            I have worked on Cloud service platforms like AWS and Azure and have
            good understanding of its services and architecture. I have an
            Intermediate understanding and hands-on on Linux (RedHat & Debian)
            and provisioned various services using Bash Scripting.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAws} color="#252f3e" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faDocker} color="#0db7ed " />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJenkins} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default About;
