import React from "react";
import { useGlobalContext } from "../pages/context";

const InputSection = () => {
  const { handleSubmit, state } = useGlobalContext();

  return (
    <div className="inputSection-container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Firstname</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            // value={person.firstName}
            // onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Lastname</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            // value={person.email}
            // onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            // value={person.age}
            // onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            // value={person.age}
            // onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="message">Leave me a message...</label>
          <textarea
            className="message-input"
            type="text"
            id="message"
            name="message"
            required
            // value={person.age}
            // onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          submit
        </button>
      </form>
    </div>
  );
};

export default InputSection;
