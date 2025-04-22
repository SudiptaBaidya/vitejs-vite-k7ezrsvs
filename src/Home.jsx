import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleAddBookClick = () => {
    navigate("/add-book"); // Navigate to the Add Book form page
  };

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button className="add-book-button" onClick={handleAddBookClick}>
        Add Book
      </button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;