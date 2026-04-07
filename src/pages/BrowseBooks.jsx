import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import dummyBooks from "../data/dummyBooks";

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  const reduxBooks = useSelector((state) => state.books?.list);

  // Use Redux books if available, otherwise fallback to dummyBooks
  const books = reduxBooks && reduxBooks.length > 0 ? reduxBooks : dummyBooks;

  // Reset search when category changes
  useEffect(() => {
    setSearch("");
  }, [category]);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = !category || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h2>Browse Books</h2>

      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* NO BOOKS FOUND */}
      {filteredBooks.length === 0 ? (
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <h2> No Books Found !! </h2>
          <p>Try searching with a different title or author.</p>

          {/* ✅ FIXED BUTTON (FORCED RESET) */}
          <button
            style={{ marginTop: "15px" }}
            onClick={() => {
              setSearch("");
              window.location.href = "/browse";
            }}
          >
            Back to All Books
          </button>
        </div>
      ) : (
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <div className="card" key={book.id}>
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />

              <h3>{book.title}</h3>
              <p><b>Author:</b> {book.author}</p>
              <p><b>Category:</b> {book.category}</p>

              {/* Rating */}
              <p><b>Rating:</b> ⭐ {book.rating || "N/A"}</p>

              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrowseBooks;