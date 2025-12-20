import { useState } from "react";
import "./styles.css";

const Task = ({ ele, tasks, setTasks }) => {
  const handleTaskDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="tasks-action">
      <div>{ele.item}</div>
      <button onClick={() => handleTaskDelete(ele.id)}>Delete</button>
    </div>
  );
};

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addTaskHandler = () => {
    if (taskName) {
      setTasks([...tasks, { item: taskName, id: Date.now() }]);
      setTaskName("");
    }
  };

  return (
    <div className="App">
      <div className="action">
        <label>Task</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={addTaskHandler}>Add</button>
      </div>
      <div className="tasks-list">
        {tasks.map((ele, idx) => (
          <div key={idx}>
            <Task ele={ele} tasks={tasks} setTasks={setTasks} />
          </div>
        ))}
      </div>
    </div>
  );
}
