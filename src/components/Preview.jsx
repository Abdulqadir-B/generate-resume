export const Preview = ({ info, education, experience }) => {
	return (
		<section className="preview-panel">
			<p className="preview-label">CV preview</p>
			<header className="preview-header">
				<h2>{info.name || "Your name"}</h2>
				<div className="preview-contact">
					<p>{info.email || "Your email"}</p>
					<p>{info.phone || "Your phone number"}</p>
				</div>
			</header>

			<section className="preview-section">
				<h3>Education</h3>
				<p>{education.school || "Your school"}</p>
				<p>{education.studyTitle || "Your title of study"}</p>
				<p>{education.date || "Your study date"}</p>
			</section>

			<section className="preview-section">
				<h3>Practical experience</h3>
				<p>{experience.company || "Your company"}</p>
				<p>{experience.position || "Your position"}</p>
				<p>{experience.responsibilities || "Your responsibilities"}</p>
				<p>
					{experience.dateFrom || "Start date"} - {experience.dateUntil || "End date"}
				</p>
			</section>
		</section>
	);
};
