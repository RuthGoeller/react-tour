import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

const [isLoading, setisLoading] = useState(true)
  const [tours, setTour] = useState([])
  const fetchTours = async ()=>{
    setisLoading(true)
    try{
      const res = await fetch(url)
      const tours = await res.json()
      setTour(tours)

      if(!res.ok) throw new Error(`${res.status} there is an error loading`)

    }catch(err){
      alert(err)
    }
    setisLoading(false)
  }
  useEffect(()=>{fetchTours()},[])

  if(isLoading){
    return <main>
      <Loading/>
    </main>
  }

  return <main>
    <Tours tours={tours}/>
  </main>;
};
export default App;
