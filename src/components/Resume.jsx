import { Education } from "./Education";
import { Experience } from "./Experience";
import { Info } from "./Info";
import { Preview } from "./Preview";
import { useState } from "react";
import "../styles/Resume.css";

export const Resume = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState({
    school: "",
    studyTitle: "",
    date: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  return (
    <main className="resume-app">
      <h1>Resume Builder</h1>
      <div className="resume-layout">
        <div className="editor-panel">
          <Info info={info} setInfo={setInfo} />
          <Education education={education} setEducation={setEducation} />
          <Experience experience={experience} setExperience={setExperience} />
        </div>

        <Preview
          info={info}
          education={education}
          experience={experience}
        />
      </div>
    </main>
  );
};
