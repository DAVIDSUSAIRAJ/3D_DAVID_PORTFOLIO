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
                  <li>ZUSTAND</li>
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
                  <li>MCP (Model Context Protocol)</li>
                </ul>
              </div>

              <div className="skill-group">
                <h3 className="skill-group-title">AI/AUTOMATION :</h3>
                <ul className="skill-list">
                  <li>QWEN LLM</li>
                  <li>AI WORKFLOW BUILDER</li>
                  <li>REACT FLOW</li>
                  <li>ZUSTAND</li>
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
                  <li>QWEN LLM</li>
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
                I am a full-stack web developer with hands-on experience in AI/automation, proficient in front-end <strong>(React.js, Next.js, Redux, TypeScript, Zustand)</strong>, 
                back-end <strong>(Node.js, Express.js, MongoDB, MCP, david-unique-id(npm))</strong>, and <strong>AI workflow development (Qwen LLM, Google Gemini LLM, React Flow, RAG Architecture)</strong>. 
                Built visual AI workflow builders, LLM-driven chatbots with RAG architecture, and real-time applications. 
                Skilled in version control <strong>(Git, GitHub)</strong>, project management <strong>(Azure DevOps)</strong>, 
                UI frameworks <strong>(Material-UI, Bootstrap)</strong>, and testing <strong>(Jest)</strong>.
              </p>
            </div>

            {/* Experience Section */}
            <div className="content-section">
              <h2 className="section-title">EXPERIENCE:</h2>
              <div className="section-underline"></div>
              <p className="section-text">
                React developer with <strong>{calculateExperience()}</strong> years experience in full-stack development, 
                AI/ML integration, and UI development. Built conversational AI chatbots using <strong>Google Gemini LLM</strong> with 
                <strong> RAG Architecture</strong>. Developed visual AI workflow builder using <strong>React Flow, Zustand, and Qwen LLM</strong>, 
                enhancing project stability and user experience.
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
                2021 <strong>National Champion</strong> in Silambam.<br />
                2024 <strong>Certified State Referee</strong> in Silambam.<br />
                <strong>Author</strong> of &quot;Philosophies of a Madman&apos;s Wanderings&quot;.
              </p>
            </div>

            {/* Publishes Section */}
            <div className="content-section">
              <h2 className="section-title">PUBLISHES:</h2>
              <div className="section-underline"></div>
              
              <div className="projects-container">
                <div className="project-item">
                  <strong>AI Flow Runner – Visual AI Workflow Builder:</strong><br />
                  <span className="tech-stack">Technology: React, React Flow, Zustand, React DnD, Node.js (Express), Qwen LLM</span><br />
                  <a href="https://ai-flow-runner.vercel.app/" target="_blank" rel="noopener noreferrer">https://ai-flow-runner.vercel.app/</a>
                </div>

                <div className="project-item">
                  <strong>MCP Server – Model Context Protocol Tools:</strong><br />
                  <span className="tech-stack">Technology: Node.js, MCP (Model Context Protocol)</span><br />
                  <span className="tech-stack">Custom MCP server with Create & Fetch tools for record management</span><br />
                  <a href="https://mcp-server-mv7m.onrender.com/sse" target="_blank" rel="noopener noreferrer">https://mcp-server-mv7m.onrender.com/sse</a>
                </div>

                <div className="project-item">
                  <strong>SwiftTalk – Real-Time Chat & Media Sharing:</strong><br />
                  <span className="tech-stack">Technology: React, Supabase (Realtime), WebRTC, Audio/Video Calls, File Sharing</span><br />
                  <a href="https://chat-osbe.onrender.com/" target="_blank" rel="noopener noreferrer">https://chat-osbe.onrender.com/</a>
                </div>

                <div className="project-item">
                  <strong>Mad Wanderings – AI-Powered Multilingual Book Chatbot:</strong><br />
                  <span className="tech-stack">Technology: React, Express.js, Google Gemini LLM, RAG Architecture, Conversational AI, Multilingual (Tamil, English, Hindi, Telugu, Malayalam, German)</span><br />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
