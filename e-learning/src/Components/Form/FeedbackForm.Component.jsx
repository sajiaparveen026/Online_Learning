import React, { useState } from "react";
import "./FeedbackForm.css"; // Import CSS file for styles

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here

    // Submit form data to server or perform other actions
    // ...

    // Reset form after submission
    setName("");
    setEmail("");
    setFeedback("");
    setSubmitted(true);
  };

  return (
    <div className="pt-5 bg-blue-50 pb-3">
    <h1 className="font-mono text-2xl ml-9 text-slate-950 font-semibold flex justify-center items-center">Your Feedback!</h1>
    <p className="text-md ml-9 text-gray-600 flex justify-center items-center">Your Feedback will be Appreciated.</p>

    <div className="feedback-form-container mt-5 ">
      {submitted ? (
        <h1 className="feedback-form-title">Thank you for your feedback!</h1>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="feedback-form-label">
           Full Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="feedback-form-input"
          />
          <label htmlFor="email" className="feedback-form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="feedback-form-input"
          />
          <label htmlFor="feedback" className="feedback-form-label">
            Feedback:
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="feedback-form-textarea"
          />
          <button type="submit" className="feedback-form-button">
            Submit
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

export default FeedbackForm;
