import './App.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Reasons } from './components/Reasons';
import { MessageGenerator } from './components/MessageGenerator';
import { Footer } from './components/Footer';
import {cssVars} from './CssVars'
import { useEffect, useState, useContext, createContext } from 'react';
import { LoaderContext, MessageContext, ErrorContext } from './components/Context';


function App() {

  const [inputValue, setInputValue] = useState('')
  const [inputCounter, setInputCounter] = useState(0)
  const [loaderStatus, setLoaderStatus] = useState(0)
  const [messageValue, setMessageValue] = useState('')
  const [errorValue, setErrorValue] = useState('d')

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
    if (val != '') {
      console.log('handleGenerate called with value: ' + val)
      setLoaderStatus(1)

      let randomNumber = getRandomInt(20)
      try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`)
        console.log('Response status: ' + res.status)
        if (res.ok){
          let j = await res.json()
          setMessageValue(j.title)
          console.log('Response text: ' + j.title)
          setLoaderStatus(2)
        } else {
          // throw res.status
          console.log(res)
          throw new Error(res.status + ' ' + res.statusText)
        }
      }
      catch(err){
        console.log(err)
        setLoaderStatus(3)
        setErrorValue(err.message)

      }
      finally {
        console.log('handleGenerate finished')
      }
    } else {
      console.log('empty input')
      setLoaderStatus(0)
    }
  }
    

  return (
    <div className="app">
      <Header/>
      <Banner/>
      <Reasons/>
      <ErrorContext.Provider value={errorValue}>
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
      </ErrorContext.Provider>
      
      <Footer/>
    </div>
  );
}

export default App;
