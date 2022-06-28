import "./App.css";
import TodoList from "./components/TodoList";
import AddData from "./components/AddData";
import Header from "./components/Header";
import api from "./components/api/todoList";
import $ from "jquery";
import React, { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const getTodoList = async () => {
    const response = await api.get("/todoList");
    setTodoList(response.data);
  };
  const addDataToList = async () => {
    console.log("add called");
    var title = $("#title").val();
    var date = $("#selectDate").val();
    var completed = $("#selectCompleted").val();
    console.log(title, date, completed);
    const request = {
      id: new Date().getTime(),
      title: title,
      dueOn: date,
      isCompleted: completed,
    };
    const response = await api.post("/todoList", request);
    console.log(response.data);
    setTodoList([...todoList, response.data]);
  };
  const removeTask = async (id) => {
    console.log(id);
    await api.delete(`/todoList/${id}`);
    const newTodoList = todoList.filter((x) => x.id != id);
    setTodoList(newTodoList);
  };
  useEffect(() => {
    //console.log("render complete");
    getTodoList();
    //$("#todoTable").DataTable().destroy();
  }, []);
  return (
    <div>
      <Header />
      <AddData callbackFn={addDataToList} />
      <TodoList todoList={todoList} removeTask={removeTask} />
    </div>
  );
}

export default App;
