import React, { useContext, useEffect, useState } from "react";
import { Button, Container, TextField, Box } from "@mui/material";
import { todoContext } from "../context/TodoContext";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  // params eto id -params
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneTodo, oneTodo, updateTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  useEffect(() => {
    getOneTodo(id);
  }, []);
  useEffect(() => {
    if (oneTodo) {
      setTodo(oneTodo.todo);
    }
  }, [oneTodo]);
  function handleSave() {
    let editedTodo = {
      todo,
    };
    updateTodo(id, editedTodo);
    navigate("/list");
    console.log(editedTodo);
  }
  return (
    <Container>
      {oneTodo ? (
        <Box>
          <TextField
            value={todo}
            onChange={e => setTodo(e.target.value)}
            label="введите данные"
            variant="outlined"
          />
          <Button onClick={handleSave} variant="outlined">
            Save
          </Button>
        </Box>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default Edit;
