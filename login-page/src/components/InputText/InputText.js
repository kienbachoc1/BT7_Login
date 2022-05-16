import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import React from "react";

export default function InputText({
  yub,
  errors,
  name,
  message,
  type = "text",
  control,
  label,
}) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ ...yub }}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            variant="standard"
            fullWidth
            type={type}
            error={errors}
            helperText={message}
          />
        )}
      />
    </>
  );
}
