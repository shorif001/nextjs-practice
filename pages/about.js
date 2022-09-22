import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';


const About = () => {

  const [users, setUsers] = useState([]);
  useEffect(()=>{
    const fetchdata = async ()=>{
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res);
        setUsers(res.data)
      }catch(err){
        console.log(err);
      }
    };
    fetchdata();
  }, [])


  const router = useRouter();
  return (
    <Layout title="About Us Page">
      <h1>about</h1>
      <button onClick={() => { router.push('/') }}>Back</button>
    </Layout>
    
  )
}

export default About