import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "../styles/resume.css";
import davidImage from "../assets/images/david.jpg";

const Resume = () => {
  // Calculate experience from March 2022
  const calculateExperience = () => {
    const startDate = new Date(2022, 2); // March 2022 (month is 0-indexed)
    const today = new Date();
    
    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    if (years > 0 && months > 0) {
      return `${years}.${months}`;
    } else if (years > 0) {
      return `${years}.0`;
    } else {
      return `0.${months}`;
    }
  };

  return (
    <div className="resume-container" id="resume_pdf_container">
      <div className="resume-wrapper" id="resume_content">
        {/* Top Header - RESUME */}
        <h1 className="resume-main-title">RESUME</h1>
        
        <div className="resume-layout">
          {/* Left Sidebar - White Section */}
          <div className="resume-sidebar">
            {/* Profile Picture */}
            <div className="profile-section">
              <div className="profile-image">
                <img src={davidImage} alt="David Susairaj" className="profile-photo" />
              </div>
              <h1 className="sidebar-name">David susairaj</h1>
              <p className="sidebar-title">MERN STACK DEVELOPER</p>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/DAVIDSUSAIRAJ" target="_blank" rel="noopener noreferrer" className="social-link-item">
                <FaGithub className="social-icon icon-github" />
                <span>https://github.com/DAVIDSUSAIRAJ</span>
              </a>
              <a href="https://www.linkedin.com/in/davidsusairaj" target="_blank" rel="noopener noreferrer" className="social-link-item">
                <FaLinkedin className="social-icon icon-linkedin" />
                <span>https://www.linkedin.com/in/davidsusairaj</span>
              </a>
              <a href="mailto:davidsusairaj1996@gmail.com" className="social-link-item">
                <FaEnvelope className="social-icon icon-email" />
                <span>davidsusairaj1996@gmail.com</span>
              </a>
              <a href="tel:+919345163305" className="social-link-item">
                <FaPhone className="social-icon icon-phone icon-phone-rotate" />
                <span>9345163305</span>
              </a>
              {/* <a href="https://stackoverflow.com/users/28158685/david-susairaj" target="_blank" rel="noopener noreferrer" className="social-link-item">
                <FaStackOverflow className="social-icon icon-stackoverflow" />
                <span>stackoverflow</span>
              </a> */}
            </div>

            {/* Skills Section */}
            <div className="skills-section">
              <h2 className="sidebar-heading">SKILLS</h2>
              
              <div className="skill-group">
                <h3 className="skill-group-title">FRONTEND :</h3>
                <ul className="skill-list">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT JS</li>
                  <li>NEXT JS</li>
                  <li>REDUX</li>
                  <li>TYPESCRIPT</li>
                  <li>SASS</li>
                  <li>MATERIAL UI</li>
                  <li>BOOTSTRAP</li>
                </ul>
              </div>

              <div className="skill-group">
                <h3 className="skill-group-title">BACKEND :</h3>
                <ul className="skill-list">
                  <li>NODE JS</li>
                  <li>EXPRESS JS</li>
                  <li>MONGODB</li>
                  <li>david-unique-id(npm)</li>
                </ul>
              </div>

              <div className="skill-group">
                <h3 className="skill-group-title">TESTING/TOOLS</h3>
                <ul className="skill-list">
                  <li>JEST</li>
                  <li>GIT</li>
                  <li>GITHUB</li>
                  <li>AZURE DEVOPS</li>
                </ul>
              </div>

              <div className="skill-group">
                <h3 className="skill-group-title">AI/ML :</h3>
                <ul className="skill-list">
                  <li>GEMINI LLM</li>
                  <li>RAG</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Content - White Section */}
          <div className="resume-content">
            {/* Summary Section */}
            <div className="content-section">
              <h2 className="section-title">SUMMARY:</h2>
              <div className="section-underline"></div>
              <p className="section-text">
                I am a web developer proficient in both front-end <strong>(HTML5, CSS3, JavaScript, React.js, Next.js, Redux)</strong> and 
                back-end <strong>(Node.js, Express.js, MongoDB, david-unique-id(npm custom ID generator))</strong> technologies. 
                I also have experience with version control <strong>(Git, GitHub)</strong>, project management <strong>(Azure DevOps)</strong>, 
                UI frameworks <strong>(Material-UI, Bootstrap)</strong>, testing frameworks (<strong>Jest</strong>), and 
                AI/ML Integration <strong>(Google Gemini LLM, RAG Architecture, Conversational AI Chatbots)</strong>.
              </p>
            </div>

            {/* Experience Section */}
            <div className="content-section">
              <h2 className="section-title">EXPERIENCE:</h2>
              <div className="section-underline"></div>
              <p className="section-text">
                React developer with <strong>{calculateExperience()}</strong> years experience in full-stack development, 
                AI/ML integration, and UI development. Built conversational AI chatbots using <strong>Google Gemini LLM</strong> with 
                <strong> RAG Architecture</strong>, enhancing project stability and user experience.
              </p>
            </div>

            {/* Education Section */}
            <div className="content-section">
              <h2 className="section-title">EDUCATION:</h2>
              <div className="section-underline"></div>
              <p className="section-text">
                H.H. The Rajah&apos;s College, Pudukkottai - 622 001. Master of Philosophy in Mathematics <strong>(MPhil)</strong>, 2018–2020.
              </p>
            </div>

            {/* Honors & Awards Section */}
            <div className="content-section">
              <h2 className="section-title">HONORS & AWARDS:</h2>
              <div className="section-underline"></div>
              <p className="section-text">
                2021 <strong>National Champion</strong> in Silambam.
              </p>
            </div>

            {/* Publishes Section */}
            <div className="content-section">
              <h2 className="section-title">PUBLISHES:</h2>
              <div className="section-underline"></div>
              
              <div className="projects-container">
                <div className="project-item">
                  <strong>SwiftTalk – Real-Time Chat & Media Sharing:</strong><br />
                  <span className="tech-stack">Technology: React, Supabase (Realtime), WebRTC, Audio/Video Calls, File Sharing</span><br />
                  <a href="https://chat-osbe.onrender.com/" target="_blank" rel="noopener noreferrer">https://chat-osbe.onrender.com/</a>
                </div>

                <div className="project-item">
                  <strong>Mad Wanderings – AI-Powered Multilingual Book Chatbot:</strong><br />
                  <span className="tech-stack">Technology: React, Express.js, Google Gemini LLM, RAG Architecture, Conversational AI, Multilingual (Tamil, English, Hindi, Telugu, Malayalam)</span><br />
                  <a href="https://madwanderings.vercel.app/" target="_blank" rel="noopener noreferrer">https://madwanderings.vercel.app/</a>
                </div>

                <div className="project-item">
                  <strong>3D Portfolio Website:</strong><br />
                  <span className="tech-stack">Technology: React, Three.js</span><br />
                  <a href="https://3-d-david-portfolio-ysab.vercel.app/" target="_blank" rel="noopener noreferrer">https://3-d-david-portfolio-ysab.vercel.app/</a>
                </div>

                <div className="project-item">
                  <strong>2D Portfolio Website:</strong><br />
                  <span className="tech-stack">Technology: MERN</span><br />
                  <a href="https://david-portfolio-two.vercel.app/" target="_blank" rel="noopener noreferrer">https://david-portfolio-two.vercel.app/</a>
                </div>

                <div className="project-item">
                  <strong>Feedback System:</strong><br />
                  <span className="tech-stack">Technology: MERN with TypeScript, Jest, and custom NPM package (&quot;david-unique-id&quot;)</span><br />
                  <a href="https://my-feedback-app-nu.vercel.app/" target="_blank" rel="noopener noreferrer">https://my-feedback-app-nu.vercel.app/</a>
                </div>

                <div className="project-item">
                  <strong>Mini eCommerce Platform:</strong><br />
                  <span className="tech-stack">Technology: MERN</span><br />
                  <a href="https://mini-ecommerce-project-6mai.vercel.app/" target="_blank" rel="noopener noreferrer">https://mini-ecommerce-project-6mai.vercel.app/</a>
                </div>

                <div className="project-item">
                  <strong>Quiz App:</strong><br />
                  <span className="tech-stack">Technology: HTML5, Sass, React.js</span><br />
                  <a href="https://davidsusairaj.github.io/quiz-react-app/" target="_blank" rel="noopener noreferrer">https://davidsusairaj.github.io/quiz-react-app/</a>
                </div>

                <div className="project-item">
                  <strong>Todo App:</strong><br />
                  <span className="tech-stack">Technology: HTML5, Sass, React.js</span><br />
                  <a href="https://davidsusairaj.github.io/todo-react-app/" target="_blank" rel="noopener noreferrer">https://davidsusairaj.github.io/todo-react-app/</a>
                </div>

                <div className="project-item">
                  <strong>RoadmapMaster – Planning Tool:</strong><br />
                  <span className="tech-stack">Technology: HTML5, Sass, React.js</span><br />
                  <a href="https://davidsusairaj.github.io/web-design-react/" target="_blank" rel="noopener noreferrer">https://davidsusairaj.github.io/web-design-react/</a>
                </div>

                <div className="project-item">
                  <strong>Journey Learning Project:</strong><br />
                  <span className="tech-stack">Technology: HTML5, Sass, JavaScript</span><br />
                  <a href="https://davidsusairaj.github.io/Web-first-Design/" target="_blank" rel="noopener noreferrer">https://davidsusairaj.github.io/Web-first-Design/</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
