import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  const workId = book.key?.replace("/works/", "");

  return (
    <Link to={`/book/${workId}`} className="book-card">
      <img src={cover} alt={book.title} className="book-cover" />
      <h3>{book.title}</h3>
      <p>{book.author_name?.slice(0, 2).join(", ")}</p>
      <p>First published: {book.first_publish_year || "N/A"}</p>
    </Link>
  );
}
