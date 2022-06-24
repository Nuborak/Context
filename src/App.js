import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Add from "./component/Add/Add";
import Counter from "./component/Counter/Counter";
import List from "./component/List/List";
import Edit from "./component/Edit/Edit";

import CounterContextProvaider from "./component/context/CounterContext";
import TodoContextProvaider from "./component/context/TodoContext";

const App = () => {
  return (
    <TodoContextProvaider>
      <CounterContextProvaider>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </CounterContextProvaider>
    </TodoContextProvaider>
  );
};

export default App;
