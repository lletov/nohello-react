import React, { useContext } from 'react'
import Refresh from './../assets/refresh.png'
import Copy from './../assets/copy.png'
import { InputContext } from './Context'

export const Message = ({messageValue, handleGenerate}) => {
  const inp = useContext(InputContext)

  async function copyMessage(val){
    const not = document.querySelector('.notification')
    await navigator.clipboard.writeText(val)
    console.log(messageValue +  ' msg copied to clipboard')
    not.classList.toggle('active-notification')
    setTimeout(() => {
      not.classList.toggle('active-notification')
    }, 1500);
  }
  return (
    <div className='message-res-form'>
        <div>
            <h3>Ваше сообщение:</h3>
        </div>
        <div className='message'>
            <div>{messageValue}</div>
            <div className='message-btns'>
              <div 
                className='message-btn'
                onClick={(e) => handleGenerate(inp)}
              >
                <img src={Refresh}/>
                <p>Другой вариант</p>
              </div>
              <div 
                className='message-btn'
                onClick={() => copyMessage(messageValue)}
              >
                <img src={Copy}/>
                <p>Скопировать</p>
              </div>
            </div>
        </div>
    </div>
  )
}
