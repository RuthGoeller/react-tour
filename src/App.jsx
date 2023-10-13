import React, { useEffect, useState } from 'react'
import Tours from './Tours';

function App() {


const url = 'https://course-api.com/react-tours-project';

const[tours, setTours] = useState([])

//remove post
const removePost = (id)=>{
  const filter = tours.filter((tour)=> tour.id !== id)
  setTours(filter)
 }

 //fetch data
const fetchData = async()=>{
try{
const res = await fetch(url)
const tours = await res.json()
setTours(tours)

}catch(err){
alert(err)
}
}
useEffect(()=>{fetchData()},[])

  return <main>
    <Tours removePost={removePost} tours={tours} />
  </main>
}

export default App


