import React from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const location = useNavigate();
  const [title, setTitle] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [titleError, setTitleError] = React.useState(false);
  const [detailsError, setDetailsError] = React.useState(false);
  const [category, setCategory] = React.useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => location("/", { state: true }));
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create A New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
          helperText={titleError ? "Required Note Title." : ""}
          label="Note Title"
          color="secondary"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        ></TextField>
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
          helperText={detailsError ? "Required Note Details." : ""}
          label="Note Details"
          color="secondary"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          fullWidth
          required
        ></TextField>
        <FormControl margin="normal">
          <FormLabel color="secondary">Gender</FormLabel>
          <RadioGroup
            name="controlled-radio-buttons-group"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            row
          >
            <FormControlLabel
              value="money"
              control={<Radio color="secondary" />}
              label="Money"
            />
            <FormControlLabel
              value="todos"
              control={<Radio color="secondary" />}
              label="Todos"
            />
            <FormControlLabel
              value="reminders"
              control={<Radio color="secondary" />}
              label="Reminders"
            />
            <FormControlLabel
              value="work"
              control={<Radio color="secondary" />}
              label="Work"
            />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
      <br />
    </Container>
  );
}
