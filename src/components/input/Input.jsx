import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

export default function Input({
  iconSymbol,
  placeholder,
  onChange,
  name,
  value,
}) {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 500 }}
    >
      <InputBase
        onChange={onChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        name={name}
        value={value}
      />
      <IconButton color="secondary" sx={{ p: "10px" }} aria-label="directions">
        {iconSymbol}
      </IconButton>
    </Paper>
  );
}
