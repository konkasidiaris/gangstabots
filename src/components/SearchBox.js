import React from "react";
import { TextField } from "@material-ui/core";

export default function SearchBox({ searchChange }) {
  return (
    <TextField
      margin="normal"
      onChange={searchChange}
      placeholder="Search for robots..."
      size="medium"
      variant="outlined"
    />
  );
}
