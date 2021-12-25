import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles, withStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import { purple } from "@mui/material/colors";

const useStyles = makeStyles({
  root: {
    backgroundColor: (note) => {
      if (note.category == "work") {
        return purple[500];
      }
    },
  },
});
export default function CartNote({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <Card elevation={5}>
      <CardHeader
        action={
          <IconButton
            onClick={() => {
              handleDelete(note.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
        avatar={
          <Avatar className={classes.root}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
