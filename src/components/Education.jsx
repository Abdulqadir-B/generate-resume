import { useState } from "react";

export const Education = () => {
  const [education, setEducation] = useState({
    school: "",
    studyTitle: "",
    date: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setEducation({
      ...education,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section>
      <h2>Educational experience</h2>

      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          <input
            name="school"
            placeholder="School name"
            value={education.school}
            onChange={handleChange}
          />
          <input
            name="studyTitle"
            placeholder="Title of study"
            value={education.studyTitle}
            onChange={handleChange}
          />
          <input
            name="date"
            type="date"
            value={education.date}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}

      <div>
        <p>{education.school || "Your school"}</p>
        <p>{education.studyTitle || "Your title of study"}</p>
        <p>{education.date || "Your study date"}</p>
      </div>

      {isSubmitted && (
        <button type="button" onClick={() => setIsSubmitted(false)}>
          Edit
        </button>
      )}
    </section>
  );
};
