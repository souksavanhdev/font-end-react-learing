import React from 'react'
import { AiFillCar } from "react-icons/ai";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate()
  return (
    <div>
      Home
      <Button variant="primary" onClick={() => navigate('/profile')} >ໜ້າໂປຟາຍ</Button>
      <AiFillCar style={{ fontSize: 50, background: "red" }} />
    </div>
  )
}
