import React,{ useState } from 'react';
import './App.css';
//import Counter from './Counter';

const App=({name})=>{
  
    const [count,setCount]=useState(0)
  
    const increment=()=>{
            setCount(count+1)
    }
  
    const decrement=()=>{
            setCount(count-1)
  }
  
    const reset=()=>{
            setCount(0)
  }
  
    return (
      <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h3>Counter</h3>
          <div className="my-5">
            <h2 className="my-5">{name}</h2>
            <h2 className="my-5">{count}</h2>
            <button className="btn btn-success mx-3" onClick={increment}>+</button>
            <button className="btn btn-danger mx-3" onClick={decrement}>-</button>
            <button className="btn btn-secondary mx-3" onClick={reset}>R</button> 
          </div>
        </div>
      </div>
    </div>
    );
  
  }
  

export default App;
