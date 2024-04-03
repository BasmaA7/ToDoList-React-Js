import axios from "axios";
import { useState } from "react";

const Create = () => {

  const [title, setTitle] = useState('');


  const handleClick = (e) => {
    e.preventDefault();

    const data = {
      'title': title
    }

    axios.post('',data, )
    

    console.log(data);
  }



  return (
    <form action="" onSubmit={handleClick}>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text" 
        placeholder="title" 
        name="" 
        id="" />
        <button type="submit">send</button>
    </form>
  )
}

export default Create
