import axios from "axios";
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [user_id, setUser] = useState(8);
  const [status, setStatus] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    const data = {
      'title': title,
      'description': description,
      'userId':user_id,
      'status': status
    };

    const token = 'Bearer 9|2p44jSSTNQXVjwHdRBBzUCMqZzlAIQmCzDdCrtzh11a8798c'; 

    const headers = {
      Authorization: token
    };

    axios.post('http://127.0.0.1:8000/api/v1/tasks', data, { headers })
      .then((response) => {
        console.log(response.data);
        // setTitle('');
        // setDescription('');
        // setUser(8);
        // setStatus('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <form onSubmit={handleClick} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="Title" 
            name="title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="Description" 
            name="description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            user_id
          </label>
          <input 
            value={user_id}
            onChange={(e) => setUser(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="Description" 
            name="user_id"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Status
          </label>
          <input 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="Status" 
            name="status"
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
