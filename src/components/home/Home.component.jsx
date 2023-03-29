import "./Home.style.scss";
import { useState } from "react";
import "../layout/Layout.style.scss";
import { Link } from "react-router-dom";
import AnimatedLetters from "./animatedLetters/Animatedletters.component";
import { useEffect } from "react";
import Loader from "react-loaders";
import svg from "../../assets/images/program.svg";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "_",
    "H",
    "a",
    "r",
    "s",
    "h",
    "v",
    "a",
    "r",
    "d",
    "h",
    "a",
    "n",
  ];
  const jobArray = ["S", "i", "n", "g", "h", "_", "J", "a", "d", "o", "n", "."];
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2 class>Frontend Developer | DevOps | Reactjs | Cloud Services</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="svg">
          <img src={svg} alt="Svg" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
