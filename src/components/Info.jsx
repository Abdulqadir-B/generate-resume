import "../styles/Info.css";
import { useState } from "react";

export const Info = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        setData({
            ...data,
            // The input name selects the state key to update.
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };
    return (
        <section className="info-section">
            <h2>General information</h2>

            {!isSubmitted && (
            <form className="info-form" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={data.phone}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}

            <div className="info-preview">
                <p>{data.name || "Your name"}</p>
                <p>{data.email || "Your email"}</p>
                <p>{data.phone || "Your phone number"}</p>
            </div>

            {isSubmitted && (
                <button
                    className="edit-button"
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                >
                    Edit
                </button>
            )}
        </section>
    );
};