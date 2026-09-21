import { useState } from "react";

export const Experience = () => {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setExperience({
      ...experience,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section>
      <h2>Practical experience</h2>

      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          <input
            name="company"
            placeholder="Company name"
            value={experience.company}
            onChange={handleChange}
          />
          <input
            name="position"
            placeholder="Position title"
            value={experience.position}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            placeholder="Main responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
          />
          <label>
            From
            <input
              name="dateFrom"
              type="date"
              value={experience.dateFrom}
              onChange={handleChange}
            />
          </label>
          <label>
            Until
            <input
              name="dateUntil"
              type="date"
              value={experience.dateUntil}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}

      <div>
        <p>{experience.company || "Your company"}</p>
        <p>{experience.position || "Your position"}</p>
        <p>{experience.responsibilities || "Your responsibilities"}</p>
        <p>
          {experience.dateFrom || "Start date"} -{" "}
          {experience.dateUntil || "End date"}
        </p>
      </div>

      {isSubmitted && (
        <button type="button" onClick={() => setIsSubmitted(false)}>
          Edit
        </button>
      )}
    </section>
  );
};
