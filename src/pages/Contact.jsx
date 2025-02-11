import React from 'react'
import { useParams } from 'react-router-dom'


const Contact = () => {
  const { name } = useParams(); 
  return (
    <div className="contact" style={{ backgroundColor: 'lightcoral', height: '100vh', width: '100vw' }}>
      <h1>Contact</h1>
      <h2>Hello, {name}!</h2>
    </div>
  );
};

export default Contact