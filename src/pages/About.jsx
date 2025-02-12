import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          David
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Summary: I am a web developer proficient in both front-end (HTML5,
          CSS3, JavaScript, React.js,Next.js, Redux) and back-end (Node.js,
          Express.js, MongoDB,david-unique-id(npm custom ID generator))
          technologies. I also have experience with version control (Git,
          GitHub), project management (Azure DevOps), and UI frameworks
          (Material-UI, Bootstrap),and testing frameworks(Jest)
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Education.</h3>
        <div className="mt-3 mb-3 flex flex-col gap-3 text-slate-500">
          <p>
            H.H. The Rajah's College, Pudukkottai - 622 001. Master of
            Philosophy in Mathematics (MPhil), 2018–2020.
          </p>
        </div>
        <h3 className="subhead-text">Honors & Awards.</h3>
        <div className="mt-3 mb-3 flex flex-col gap-3 text-slate-500">
          <p>2021 National Champion in Silambam.</p>
        </div>
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-3 mb-3 flex flex-col gap-3 text-slate-500">
          <p>
            React developer specializing 3.0 years in bug fixing and ui
            development, enhancing projects stability and user experience.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    SSATD
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
