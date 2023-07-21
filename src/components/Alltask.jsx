// AllTasks.js
import React from 'react';

const Alltask = ({ tasks } ) => {
    const formatTime = (time) => {
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};
  return (
    <div>
      <h4>All Tasks</h4>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
       <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Time Tracked</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{formatTime(task.timing)}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default Alltask;
