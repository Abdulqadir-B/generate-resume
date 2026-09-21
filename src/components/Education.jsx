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

      {isSubmitted && (
        <button type="button" onClick={() => setIsSubmitted(false)}>
          Edit
        </button>
      )}
    </section>
  );
};
