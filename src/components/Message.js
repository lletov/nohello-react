import React from 'react'
import Refresh from './../assets/refresh.png'
import Copy from './../assets/copy.png'

export const Message = () => {
  return (
    <div className='message-res-form'>
        <div>
            <h3>Ваше сообщение:</h3>
        </div>
        <div className='message'>
            <div>Text</div>
            <div className='message-btns'>
              <div className='message-btn'>
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
