import React from 'react'
import { Message } from './Message'
import { Loader } from './Loader'
import { useState } from 'react'
import { Response } from './Response'

export const MessageGenerator = ({handleInput, inputLength, resetInput, inputValue, handleGenerate}) => {
  return (
    <div className='content generator'>
        <div className='h2-content'>
            <div className='sticker'>Beta</div>
            <div className='sticker-info'>
                <p></p>
            </div>
            <h2>Сгенерируйте нужное сообщение</h2>
            <p className='gray-text'>
            Не всегда есть возможность думать над тем, как описать все кратко. Введите тему, о которой будет сообщение или вопросы, о которых нужно узнать в поле ниже, и получите готовое сообщение за несколько секунд
            </p>
        </div>
        <div className='generator-forms'>
            <div className='input-form'>
                <input 
                name='msg-input'
                placeholder='Введите тему или ключевые вопросы сообщения'
                maxLength={140}
                value={inputValue}
                onChange={(e) => handleInput(e.target.value)}
                ></input>
                <button 
                    className='m-button'
                    onClick={(e) => handleGenerate(inputValue)}
                >Генерировать</button>
                <div className='input-panel'>
                    <button className='input-clear' onClick={(e) => resetInput(e)}>Очистить</button>
                    <div className='vertical-line-div' style={{backgroundColor: '#8a8a8a', height: '20px'}}></div>
                    <div className='input-counter'><p>{inputLength} / 140</p></div>
                    
                </div>
            </div>
            <Response handleGenerate={handleGenerate}/>
        </div>
    </div>
  )
}
