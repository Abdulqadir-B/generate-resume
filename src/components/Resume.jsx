import { Education } from "./Education";
import { Experience } from "./Experience";
import { Info } from "./Info";
import { Preview } from "./Preview";
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

      <Preview
        info={info}
        education={education}
        experience={experience}
      />
    </main>
  );
};
