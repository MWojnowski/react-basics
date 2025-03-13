import { useState } from 'react';
import style from './toDo.module.css';
function ToDo() {
  const [tasks, setTasks] = useState(['a', 'b', 'c']);
  const [newTask, setNewTask] = useState('');

  const handleInput = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    if (newTask != '' && newTask != null && !newTask.match(/^\s*$/)) {
      setTasks((t) => [newTask, ...t]);
      setNewTask('');
    }
  };
  const delTask = (index) => {
    setTasks((c) => c.filter((_, i) => i != index));
  };
  const moveTaskUp = (index) => {
    if (index > 0) {
      const updated = [...tasks];
      [updated[index], updated[index - 1]] = [
        updated[index - 1],
        updated[index],
      ];
      setTasks(updated);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      console.log(index, tasks.length - 1);
      const updated = [...tasks];
      [updated[index], updated[index + 1]] = [
        updated[index + 1],
        updated[index],
      ];
      setTasks(updated);
    }
  };
  return (
    <>
      <div className={style.ToDo}>
        <h1>To Do List</h1>
        <div>
          <input
            id="task"
            type="text"
            placeholder="Task description"
            value={newTask}
            onChange={handleInput}
          />
          <button onClick={addTask} className={style.AddButton}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((e, i) => (
            <li key={i}>
              <span className={style.Text}>{e}</span>
              <button className={style.delButton} onClick={() => delTask(i)}>
                delete
              </button>
              <button className={style.MoveUp} onClick={() => moveTaskUp(i)}>
                👆
              </button>
              <button
                className={style.MoveDown}
                onClick={() => moveTaskDown(i)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDo;
