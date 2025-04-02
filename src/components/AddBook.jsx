import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // Import the CSS for styling

function AddBook() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book added:", formData);
    navigate("/"); // Navigate back to Home after submission
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="coverImage">Cover Image URL:</label>
        <input
          type="url"
          id="coverImage"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          required
        />

        {/* Button Group for Better Layout */}
        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" className="cancel-button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;