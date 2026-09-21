import { useState } from "react";

export const Info = ({ info, setInfo }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        setInfo((currentInfo) => ({
            ...currentInfo,
            // The input name selects the state key to update.
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };
    return (
        <section className="form-section">
            <h2>General information</h2>

            {!isSubmitted && (
            <form className="resume-form" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={info.name}
                        onChange={handleChange}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={info.email}
                        onChange={handleChange}
                    />
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={info.phone}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}

            {isSubmitted && (
                <button
                    className="secondary-button"
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                >
                    Edit
                </button>
            )}
        </section>
    );
};