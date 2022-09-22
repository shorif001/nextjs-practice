import React from 'react';
import axios from 'axios';

const Ssr = ({ users }) => {
  return (
    <div>
      <h1>Server Side Rendering</h1>
      {
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))
      }
      </div>
  );
};

export default Ssr

export async function getStaticProps(){
  try{
    const data = await axios.get('https://jsonplaceholder.typicode.com/users');
    return {
      props:{
        users: data,
      }
    }
  }catch(err){
    console.log(err);
  }
}

// pages > index.js && pages> SSR.js deference