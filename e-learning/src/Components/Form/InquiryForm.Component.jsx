import React, { useState } from "react";
import "./FeedbackForm.css"; // Import CSS file for styles

const InquiryForm = () => {
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
    <div className="pt-5 bg-blue-50">
    <h1 className="font-mono text-3xl flex items-center justify-center text-slate-950 font-bold">Any Issue?</h1>
    <p className="text-md ml-9 text-gray-600 flex items-center justify-center">Write down you Inquiry and we will reach out to you soon.</p>

    <div className="feedback-form-container mt-5 bg-blue-50 mb-3">
      {submitted ? (
        <h1 className="feedback-form-title">We will Reach out to you Very soon.</h1>
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
            Inquiry:
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

export default InquiryForm;
