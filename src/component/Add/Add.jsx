import React, { useContext, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { todoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const { createTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  function handleSave() {
    let newTodo = {
      todo,
    };
    createTodo(newTodo);
    navigate("/list");
    console.log(newTodo);
  }
  return (
    <Box>
      <TextField
        value={todo}
        onChange={e => setTodo(e.target.value)}
        label="Outlined"
        variant="outlined"
      />
      <Button onClick={() => handleSave()} variant="contained">
        Add
      </Button>
    </Box>
  );
};

export default Add;
