
import React from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./components/BookCard"; // Ensure correct path
import books from "./booksData"; // Ensure correct path
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      
      {/* Add Book Button */}
      <button className="add-book-button" onClick={() => navigate("/add-book")}>
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
