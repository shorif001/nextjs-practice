import React, {useState, useEffect} from "react";
import axios from "axios";

const Test = () => {

  const [users, setUsers] = useState([]);
  useEffect(()=>{
    const fetchdata = async()=>{
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(res);
        setUsers(res.data)
      }catch(err){
        console.log(err);
      }
    };
    fetchdata();
  }, [])
  return (
    <div>
      <h1>Test page</h1>

  <ul>
    {
      users.map((user)=>(
        <li key={user.id}>{user.name} | {user.username} | {user.email} | {user.phone} | {user.company.bs} </li>
      ))
    }
  </ul>
  
    </div>
  )
}

export default Test