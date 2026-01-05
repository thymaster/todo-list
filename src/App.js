import { useState } from "react";
import "./styles.css";

const Task = ({ ele, setEditId, tasks, setTasks, setTaskName, taskName, isEdit, setIsEdit }) => {
  const [editTask, setEditTask] = useState([]);

  const handleTaskDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleTaskEdit = (ele) => {
    setIsEdit(true);
    setTaskName(ele.item);
    setEditId(ele.id);
  };
  

  return (
    <div className="tasks-action">
      <div>{ele.item}</div>
      <button onClick={() => handleTaskEdit(ele)}>Edit</button>
      <button onClick={() => handleTaskDelete(ele.id)}>Delete</button>
    </div>
  );
};

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const updateTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editId ? { ...task, item: taskName } : task
      )
    );
    setTaskName("");
    setIsEdit(false);
    setEditId(null);
  }

  const addTaskHandler = () => {
    if (!taskName) return;

    if (isEdit) {
      updateTask();
    } else {
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
        <button onClick={addTaskHandler}>{ !isEdit ? "Add" : "Update"}</button>
      </div>
      <div className="tasks-list">
        {tasks.map((ele, idx) => (
          <div key={idx}>
            <Task ele={ele} setEditId={setEditId} tasks={tasks} setTasks={setTasks} taskName={taskName} setTaskName={setTaskName} isEdit={isEdit} setIsEdit={setIsEdit} />
          </div>
        ))}
      </div>
    </div>
  );
}
