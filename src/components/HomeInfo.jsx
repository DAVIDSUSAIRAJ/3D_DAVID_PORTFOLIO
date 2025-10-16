import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Hi, I'm
          <span className="font-semibold mx-2 text-white">David Susairaj</span>
          👋 A MERN Stack Developer from India.
        </p>

        <div className="neo-brutalism-white neo-btn_home">
          <div className="flex w-full flex-col sm:flex-row sm:justify-between items-center gap-3">
            <a
              href="https://github.com/DAVIDSUSAIRAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#181717] font-medium hover:underline"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/davidsusairaj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#0A66C2] font-medium hover:underline"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:davidsusairaj1996@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D14836] font-medium hover:underline"
            >
              <FaEnvelope size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Worked with one company <br /> and picked up many skills along the way
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Have questions or just want to say hello? Feel free to reach out!
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
