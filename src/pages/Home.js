import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import CartNote from "../components/CartNote";
import Masonry from "react-masonry-css";

export default function Home() {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    let apiCall = true;
    if (apiCall) {
      fetch(" http://localhost:8000/notes")
        .then((res) => res.json())
        .then((data) => setNotes(data));
    }
    return () => {
      apiCall = false;
    };
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((d) => {
          return (
            <div item key={d.id} xs={12} sm={6} md={4}>
              <CartNote note={d} handleDelete={handleDelete} />
            </div>
          );
        })}
      </Masonry>
    </Container>
  );
}
