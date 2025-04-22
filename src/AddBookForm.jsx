import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation


const AddBookForm = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book added successfully! (Hypothetical)");
    navigate("/"); // Navigate back to the Home page
  };

  return (
    <div className="add-book-form-container">
      <h1>Add a New Book</h1>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <label>
          Author:
          <input type="text" name="author" required />
        </label>
        <label>
          Description:
          <textarea name="description" required></textarea>
        </label>
        <label>
          Cover Image URL:
          <input type="url" name="coverImage" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBookForm;