export const Preview = ({ info, education, experience }) => {
	return (
		<section className="preview-panel">
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
	);
};
