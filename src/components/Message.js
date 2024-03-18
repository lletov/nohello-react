import React from 'react'

export const Message = () => {
  return (
    <div className='message-res-form'>
        <div>
            <h3>Ваше сообщение:</h3>
        </div>
        <div className='message'>
            <div>Text</div>
            <div className='message-btns'>
                <a href='#'>Другой вариант</a>
                <a href='#'>Скопировать</a>
            </div>
        </div>
    </div>
  )
}
