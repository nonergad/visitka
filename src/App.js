import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [visability, setVisability] = useState(false);
  const [flag, setFlag] = useState(true);


  const clickHandler = () => {
    setVisability(!visability)
  }

  const handleKeyUp = event =>{
    if(event.code === 'Space'){
      setFlag(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, [])

  return (
    <div className="App">
      {flag && 
      <div className={visability ? 'Invisible' : 'Visible'} onClick={clickHandler}>
        <p className='Name'>Ильин Алексей Васильевич</p>
        <p className='JobName'>Начинающий web-программист / Junior Frontend Developer</p>
      </div>}
    </div>
  );
}

export default App;