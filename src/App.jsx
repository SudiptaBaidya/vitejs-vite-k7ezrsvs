import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components
import Home from "./Home";
import AddBookForm from "./AddBookForm"; // Import AddBookForm component
import "./App.css"; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/add-book" element={<AddBookForm />} /> {/* Add Book form page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;