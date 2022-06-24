import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const { counter, decrement, increment } = useContext(CounterContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <IconButton onClick={() => decrement()} aria-label="delete">
        <RemoveIcon />
      </IconButton>
      <span>{counter}</span>
      <IconButton
        onClick={() => increment()}
        aria-label="delete"
        color="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Counter;
