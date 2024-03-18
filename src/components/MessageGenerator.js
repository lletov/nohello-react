import React from 'react'
import { Message } from './Message'

export const MessageGenerator = () => {
  return (
    <div className='content generator'>
        <div className='h2-content'>
            <h2>Сгенерируйте нужное сообщение</h2>
            <p className='gray-text'>
            Не всегда есть возможность думать над тем, как описать все кратко. Введите тему, о которой будет сообщение или вопросы, о которых нужно узнать в поле ниже, и получите готовое сообщение за несколько секунд
            </p>
        </div>
        <div className='generator-forms'>
            <div className='input-form'>
                <input 
                placeholder='Введите тему или ключевые вопросы сообщения'
                maxLength={140}
                ></input>
                <button className='m-button'>Генерировать</button>
            </div>
            <div>
                <Message/>
            </div>
        </div>
    </div>
  )
}
