import React, { useContext } from 'react'
import Refresh from './../assets/refresh.png'
import Copy from './../assets/copy.png'
import { InputContext } from './Context'

export const Message = ({messageValue, handleGenerate}) => {
  const inp = useContext(InputContext)
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
              <div className='message-btn'>
                <img src={Copy}/>
                <p>Скопировать</p>
              </div>
            </div>
        </div>
    </div>
  )
}
