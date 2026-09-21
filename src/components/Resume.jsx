import { Education } from "./Education";
import { Experience } from "./Experience";
import { Info } from "./Info";

export const Resume = () => {
	return (
		<main>
			<h1>Resume Builder</h1>
			<Info />
			<Education />
			<Experience />
		</main>
	);
};
