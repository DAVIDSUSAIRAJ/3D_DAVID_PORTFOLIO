import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";
import { arrow } from "../assets/icons";
import { useState } from "react";
import { downloadCV } from "../utils/downloadCV";
import Resume from "./Resume";

const HomeInfo = ({ currentStage }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadCV();
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  if (currentStage === 1)
    return (
      <>
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

              <a
                href="tel:+91934516305"
                className="flex items-center gap-2 text-[#25D366] font-medium hover:underline"
              >
                <FaPhone size={18} className="rotate-90" />
                <span>+91 9345163305</span>
              </a>
            </div>
          </div>
          
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Generating CV...</span>
              </>
            ) : (
              <>
                <FaDownload size={16} />
                <span>Download CV</span>
              </>
            )}
          </button>
        </div>
      </>
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
