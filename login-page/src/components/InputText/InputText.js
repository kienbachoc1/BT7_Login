import { TextField } from "@mui/material";
import React from "react";

export default function InputText({
  yub,
  errors,
  name,
  message,
  type = "text",
}) {
  return (
    <>
      <TextField
        label={name}
        variant="standard"
        fullWidth
        type={type}
        {...yub}
        error={errors}
        helperText={message}
      />
    </>
  );
}
