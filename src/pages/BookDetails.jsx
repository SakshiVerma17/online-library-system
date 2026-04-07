import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dummyBooks from "../data/dummyBooks";

function BookDetails() {
  const { id } = useParams();

  const reduxBooks = useSelector((state) => state.books?.list);
  const books = reduxBooks && reduxBooks.length > 0 ? reduxBooks : dummyBooks;

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2 style={{ textAlign: "center" }}>Book Not Found</h2>;
  }

  return (
    <div className="book-details-page">
      <div className="book-details-card">
        <img src={book.image} alt={book.title} />

        <div className="book-info">
          <h1>{book.title}</h1>
          <p className="description">{book.description}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <p><strong>Rating:</strong> ⭐ {book.rating || "N/A"}</p>

          <Link to={-1} className="back-btn">
            ← Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;