import React from 'react'
import { MessageExample } from './MessageExample'

export const Reasons = () => {
  return (
    <div className='content reasons'>
      <div className='reasons-title'>
        <h2>Почему это важно?</h2>
      </div>
      <div className='text-columns'>
        <div className='text-column'>
          <p>Представьте, что вы позвонили кому-то по телефону, поздоровались и поставили его на удержание...</p>
          <p>Вы пытаетесь быть вежливым и не сразу переходите к просьбе, как если бы вы делали это лично или по телефону. Но чат не является ни тем, ни другим. Печатать гораздо медленнее, чем говорить. Вместо того, чтобы быть вежливым, вы просто заставляете собеседника ждать, пока вы сформулируете свой вопрос, а это приводит к потере продуктивности.</p>
        </div>
        <div className='text-column'>
          <p>Если вы считаете, что просто сказать "Привет" и задать вопрос - это немного грубовато, вы все равно можете предварить свое сообщение таким количеством любезностей, какое сочтете нужным.</p>
          <p>Кажется банальным, но описание своего вопроса до получения отклика от собеседника, делает возможным <strong>асинхронное общение</strong>. Если собеседник в отъезде, и вы уходите до его возвращения, он все равно сможет ответить на ваш вопрос, вместо того, чтобы просто смотреть на "Привет" и гадать, что вы хотели.</p>
          <p>Когда общение идет правильно - всем хорошо!</p>
        </div>
      </div>
      <div className='examples'>
        <div>
          <h3>Еще несколько примеров</h3>
        </div>
        <div className='example-block'>
          <p>Вместо этого</p>
          <div className='example-row'>
            <MessageExample text={'Привет, на связи?'} tone={'wrong'}/>
            <MessageExample text={'Привет, Соня. Есть небольшой вопрос'} tone={'wrong'}/>
            <MessageExample text={'Есть минутка?'} tone={'wrong'}/>
            <MessageExample text={'тут?'} tone={'wrong'}/>
          </div>
        </div>
        <div  className='example-block'>
          <p>Попробуйте использовать</p>
          <div className='example-row'>
            <MessageExample text={'Привет, как дела? Не подскажешь, к какому сроку это надо будет сделать?'} tone={'right'}/>
            <MessageExample text={'Привет! Надеюсь, у тебя все хорошо. Мне нужно обсудить следующий релиз, когда у тебя будет минутка :)'} tone={'right'}/>
            <MessageExample text={'Хай, если не занят, не мог бы ты обновить инструкцию по деплою?'} tone={'right'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
