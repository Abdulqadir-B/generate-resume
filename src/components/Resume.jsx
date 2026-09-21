import { Education } from "./Education";
import { Experience } from "./Experience";
import { Info } from "./Info";
import { useState } from "react";

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
    <main>
      <h1>Resume Builder</h1>
      <Info info={info} setInfo={setInfo} />
      <Education education={education} setEducation={setEducation} />
      <Experience experience={experience} setExperience={setExperience} />

      <section>
        <h2>CV preview</h2>
        <h3>{info.name || "Your name"}</h3>
        <p>{info.email || "Your email"}</p>
        <p>{info.phone || "Your phone number"}</p>
        <h3>Education</h3>
        <p>{education.school || "Your school"}</p>
        <p>{education.studyTitle || "Your title of study"}</p>
        <p>{education.date || "Your study date"}</p>
        <h3>Practical experience</h3>
        <p>{experience.company || "Your company"}</p>
        <p>{experience.position || "Your position"}</p>
        <p>{experience.responsibilities || "Your responsibilities"}</p>
        <p>
          {experience.dateFrom || "Start date"} - {experience.dateUntil || "End date"}
        </p>
      </section>
    </main>
  );
};
