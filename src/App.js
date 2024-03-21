import './App.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Reasons } from './components/Reasons';
import { MessageGenerator } from './components/MessageGenerator';
import { Footer } from './components/Footer';
import {cssVars} from './CssVars'
import { useEffect, useState, useContext, createContext } from 'react';
import { LoaderContext, MessageContext } from './components/LoaderContext';


function App() {

  const [inputValue, setInputValue] = useState('')
  const [inputCounter, setInputCounter] = useState(0)
  const [loaderStatus, setLoaderStatus] = useState(0)
  const [messageValue, setMessageValue] = useState('')

  function handleInput(val){
    setInputValue(val)
    setInputCounter(val.length)
  }
  function resetInput(){
    setInputValue('')
    setInputCounter(0)
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  async function handleGenerate(val){
    console.log('handleGenerate called with value: ' + val)
    setLoaderStatus(1)
    let randomNumber = getRandomInt(99)
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`)
      console.log(res.status)
      if (res.status == 200){
        let j = await res.json()
        setMessageValue(j.title)
        console.log(j.title)
        setLoaderStatus(2)
        console.log(loaderStatus)
      }
      else {
        console.error(res.status);
      }
    }
    catch(err){
      console.log(err)

    }
    finally {
      console.log('handleGenerate finished')
    }
  }

  return (
    <div className="app">
      <Header/>
      <Banner/>
      <Reasons/>
      <MessageContext.Provider value={messageValue}>
      <LoaderContext.Provider value={loaderStatus}>
        <MessageGenerator 
          handleInput={handleInput}
          inputLength={inputCounter}
          inputValue={inputValue}
          resetInput={resetInput}
          handleGenerate={handleGenerate}
          messageValue={messageValue}
        />
      </LoaderContext.Provider>
      </MessageContext.Provider>
      
      <Footer/>
    </div>
  );
}

export default App;
