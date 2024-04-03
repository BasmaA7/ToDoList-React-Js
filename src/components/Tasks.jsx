import axios from "axios";
import { useEffect, useState } from "react"

const Tasks = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const headers = {
      Authorization: 'Bearer 9|2p44jSSTNQXVjwHdRBBzUCMqZzlAIQmCzDdCrtzh11a8798c'
    }

    axios.get('http://127.0.0.1:8000/api/v1/tasks', {headers})
    .then((res) => {
      setTasks(res.data.data);
    })
    .catch(console.log)
  }, []);


  return (
    <div>
      {
        tasks.map((task) => (
          <>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </>
        ))
      }
    </div>
  )
}

export default Tasks
