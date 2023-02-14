import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
const MoreDetails = () => {
    const {id}=useParams();
    const [data,setData]= useState ([])
    const [loaded,setLoaded] = useState(true)
useEffect(() => {
   
axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setData(res.data)).then(()=>setLoaded(false))
}, [])

  return (
   <div className='details'>
    {loaded==true?<div><Spinner className='spn' animation="border" role="status">
  </Spinner></div>:
  data.map((el)=>el.id==id?
  <div>
  <Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>{el.username}</Card.Title>
<Card.Subtitle className="mb-2 text-muted">{el.email}</Card.Subtitle>
<Link to ='/'><button className='btn'>less</button></Link>
</Card.Body>
</Card>
</div>:
null)}
</div>
)
}

export default MoreDetails