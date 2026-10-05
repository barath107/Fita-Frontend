
import { useEffect, useState,useRef } from 'react';
import './App.css'
import Navbar from './Navbar';
import { ThemeContext } from './ThemeContext';

function App() {
  //lifecycle hooks
  let [a, setA] = useState("JavaScript");


  useEffect(() => {
    console.log("Javascript Loading")
    re.current.placeholder = "yellow";
  }, []);

  const re = useRef();

  function updateA() {
    setA  ("Java");
    console.log(a);
  }
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <>

    <p>{a}</p>
    <ThemeContext.Provider value={a}>
        <Navbar />
    </ThemeContext.Provider>
      

      <p>hello</p>
      <p>{a}</p>
      <p>{arr}</p>

      {arr.map((e) => (
        <>
          <p>{e}</p>
        </>
      ))}

      
      <input ref={re} type="text" onChange={(e) => setA(e.target.value)} />
      <button onClick={updateA}>Update</button>
    </>
  )
}

export default App
