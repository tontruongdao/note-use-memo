import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  
  const themeStyles = {
    backgroundColor: dark ? 'teal' : '#282c34',
    color: dark ? 'cream' : 'lightsteelblue'
  }

  const doubleNumber = slowFunction(number)

  

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ display: "flex", alignItems: "center", height: "5vw", margin: "0" }}>
          use Memo 
          <span>
            <img src={logo} className="App-logo" alt="logo" />
          </span>
        </h3>
        <>
          <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
          <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
          <div style={themeStyles}>{doubleNumber}</div>
        </>
      </header>
    </div>
  );
}

const slowFunction = (num) => {
  console.log("calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2
}

export default App;
