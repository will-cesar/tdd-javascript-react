import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

import { api } from "./services/api";
import { BookList } from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await api.get("books");
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        DevBook!
      </Typography>
      <BookList books={books} />
    </>
  );
}

export default App;
