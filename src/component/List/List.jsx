import React, { useContext, useEffect } from "react";
import { todoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { getTodos, todos, deleteTodo } = useContext(todoContext);
  const navigate = useNavigate();
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {todos.map(item => (
        <div key={item.id}>
          {item.todo}
          <button onClick={() => deleteTodo(item.id)}>delete</button>
          <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default List;
