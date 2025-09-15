import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // for back navigation
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await res.json();
        setBook(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading book details...</p>;
  if (!book) return <p className="text-center mt-10">Book not found.</p>;

  const coverId = book.covers ? book.covers[0] : null;
  const cover = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div className="book-detail">
      <button
        onClick={() => navigate(-1)} // go back
        className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
      >
        ← Back
      </button>

      <img src={cover} alt={book.title} className="book-detail-img" />
      <h1 className="book-detail-title">{book.title}</h1>
      {book.description && (
        <p className="mt-4">
          {typeof book.description === "string" ? book.description : book.description.value}
        </p>
      )}
      {book.subjects && (
        <p className="mt-2 text-gray-600">
          Subjects: {book.subjects.slice(0, 5).join(", ")}
        </p>
      )}
    </div>
  );
}
