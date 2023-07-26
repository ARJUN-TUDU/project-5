
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
function App() {
  
  const [data,setData] = useState([]);
  
  

  useEffect(()=>{

   axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=> {
      return setData(res.data)
   });

   
   

  },[]);

  return (
    <div className="App">
       <ul>
        {
          data.map((x)=>
          <div key = {x.id}>
            <h1>{x.id}</h1>
            <div>{x.title}</div>
          </div>
          )
        }
       </ul>
    </div>
  );
}

export default App;
