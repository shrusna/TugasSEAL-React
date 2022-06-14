import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import TextInput from "./components/Input";
import List from "./components/ListItem";

function App() {
  const [tasklist, setTasklist] = useState({ data: [] });
  const [newtaskvalue, setnewtaskvalue] = useState("");

  const onClearArray = () => {
    setTasklist({ data: [] });
  };

  const actionAddTask = () => {
    if (newtaskvalue.trim() === "") {
      alert("Please enter a task");
      return false;
    }
    const newData = tasklist.data;
    newData.push(newtaskvalue);
    setTasklist({ data: newData });
  };

  return (
    <div>
      <h1 className="mx-auto">To Do List </h1>
      <TextInput
        value={newtaskvalue}
        onChange={(e) => setnewtaskvalue(e.target.value)}
        type="text"
        id="newtaskinput"
        placeholder="input task here"
      />
      <Button text="Add Task" onClick={actionAddTask} />
      <List ListItem={tasklist} />
      <Button
        type="button"
        backgroundColor="red"
        text="Clear Data"
        onClick={onClearArray}
      />
      <Button
        text="Recommendation"
        onClick={() => setnewtaskvalue("Task Rekomendasi")}
      />
    </div>
  );
}

export default App;
