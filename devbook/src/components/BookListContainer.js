import { useEffect, useState } from "react";

import { api } from "../services/api";
import { BookList } from "./BookList";

export const BookListContainer = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await api.get("books");
        setBooks(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <BookList books={books} />
    </>
  );
};
