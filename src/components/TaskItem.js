import React, { useState } from "react";

function TaskItem({ task, index, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    editTask(index, newText);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <div className="task-text">
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span
            className={task.completed ? "completed" : ""}
            onClick={() => toggleTask(index)}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="task-buttons">
        {isEditing ? (
          <button className="save" onClick={handleSave}>Save</button>
        ) : (
          <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button className="toggle" onClick={() => toggleTask(index)}>
          {task.completed ? "Undo" : "Done"}
        </button>

        <button className="delete" onClick={() => deleteTask(index)}>
          X
        </button>
      </div>
    </div>
  );
}

export default TaskItem;