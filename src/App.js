import './App.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Reasons } from './components/Reasons';
import { MessageGenerator } from './components/MessageGenerator';
import { Footer } from './components/Footer';
import {cssVars} from './CssVars'
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [inputCounter, setInputCounter] = useState(0)

  function handleInput(val){
    setInputValue(val)
    setInputCounter(val.length)
  }
  function resetInput(el){
    setInputValue('')
    setInputCounter(0)
    el.target.value = ''
  }

  return (
    <div className="app">
      <Header/>
      <Banner/>
      <Reasons/>
      <MessageGenerator 
        handleInput={handleInput}
        inputLength={inputCounter}
        inputValue={inputValue}
        resetInput={resetInput}
      />
      <Footer/>
    </div>
  );
}

export default App;
