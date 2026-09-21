import { useState } from "react";

export const Education = ({ education, setEducation }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setEducation((currentEducation) => ({
      ...currentEducation,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="form-section">
      <h2>Educational experience</h2>

      {!isSubmitted && (
        <form className="resume-form" onSubmit={handleSubmit}>
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

      {isSubmitted && (
        <button className="secondary-button" type="button" onClick={() => setIsSubmitted(false)}>
          Edit
        </button>
      )}
    </section>
  );
};
