
import Layout from '../components/Layout';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {
 const [users, setUsers] = useState([]);
 useEffect(()=>{

  //// step 1 start
  // axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
  //     console.log(res);
  //     setUsers(res.data)
  //   }).catch(err=>{
  //     console.log(err);
  //   })
  //// step 1 end

  // step 2 start
  const fetchdata = async ()=>{
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(res);
      setUsers(res.data)
    }catch (error){
      console.log(error);
    }
  };
  fetchdata();
 }, [])
 //// step 2 end
 
  return (
    <>
      <Layout title="Home Page">
      
      <h1 className="bg-dark text-white">Welcome to Nextjs</h1>

<ul>
  {
    users.map(user =>(
      <li key={user.id}>{user.name}</li>
    ))
  }
</ul>
      
    </Layout>
    </>
  
  )
}

// pages > index.js && pages> SSR.js deference