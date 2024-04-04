import React, { useEffect, useState } from "react";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const headers = {
      Authorization: 'Bearer 9|2p44jSSTNQXVjwHdRBBzUCMqZzlAIQmCzDdCrtzh11a8798c'
    };

    axios.get('http://127.0.0.1:8000/api/v1/tasks', { headers })
      .then((res) => {
        setTasks(res.data.data);
      })
      .catch(console.log);
  }, []);

  const handleUpdate = (taskId) => {
    console.log(`Updating task with ID ${taskId}`);
    setEditingTask(taskId);
  };

  const handleEdit = (e, taskId) => {
    e.preventDefault();
    const updatedTitle = e.target.title.value;
    const updatedDescription = e.target.description.value;

    const headers = {
      Authorization: 'Bearer 9|2p44jSSTNQXVjwHdRBBzUCMqZzlAIQmCzDdCrtzh11a8798c'
    };

    axios.patch(`http://127.0.0.1:8000/api/v1/tasks/${taskId}`, {
      title: updatedTitle,
      description: updatedDescription,
    }, { headers })
      .then(() => {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, title: updatedTitle, description: updatedDescription } : task));
        setEditingTask(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (taskId) => {
    const headers = {
      Authorization: 'Bearer 9|2p44jSSTNQXVjwHdRBBzUCMqZzlAIQmCzDdCrtzh11a8798c'
    };

    axios.delete(`http://127.0.0.1:8000/api/v1/tasks/${taskId}`, { headers })
      .then(() => {
        setTasks(tasks.filter(task => task.id !== taskId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto">
      {tasks.map((task) => (
        <div key={task.id} className="bg-gradient-to-r from-gray-300 to-gray-600 rounded-lg text-center shadow-md p-4 my-4">
          {editingTask === task.id ? (
            <form onSubmit={(e) => handleEdit(e, task.id)} className="text-left">
              <input type="text" name="title" defaultValue={task.title} className="block w-full mb-2 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
              <textarea name="description" defaultValue={task.description} className="block w-full mb-2 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"></textarea>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Save</button>
            </form>
          ) : (
            <>
              <h1 className="text-lg font-semibold">{task.title}</h1>
              <p className="text-white">{task.description}</p>
              <p className="text-gray-500">Status: {task.status}</p>
              <div className="flex justify-center mt-2">
                <button onClick={() => handleUpdate(task.id)} className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Update</button>
                <button onClick={() => handleDelete(task.id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tasks;
