import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const List = () => {
    const [data,setData]= useState ([])
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setData(res.data))
    }, [])
  return (
    <div className='list'>
    {data.map((el)=> <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{el.username}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{el.email}</Card.Subtitle>
      <Link to ={`/MoreDetails/${el.id}`}><button className='btn'>more</button></Link>
    </Card.Body>
  </Card>)}
    </div>
  )
}

export default List