import React from 'react'
import { DialogMessage } from './DialogMessage'

export const Banner = () => {
  return (
    <div className='content banner'>
        <div className='h2-content'>
            <h1>no hello</h1>
            <p className='gray-text'>
                Пожалуйста, не начинайте разговор в чате с одного «привет». Сообщение без конткеста может заставить собеседника ждать и чувствовать себя немного расстроенным. Вместо этого проявите инициативу и включите свой вопрос или просьбу прямо в первое сообщение! *
            </p>
        </div>
        <div className='banner-content'>
            <div className='banner-column'>
                <h3>Вместо этого</h3>
                <div className='dialog'>
                    <DialogMessage
                        user={'left'}
                        tone={'wrong'}
                        text={'Привет'}
                    />
                    <DialogMessage
                        user={'right'}
                        tone={'wrong'}
                        text={'Привет'}
                    />
                    <DialogMessage
                        user={'left'}
                        tone={'wrong'}
                        text={'Есть минутка?'}
                    />
                    <DialogMessage
                        user={'right'}
                        tone={'wrong'}
                        text={'Да'}
                    />
                    <DialogMessage
                        user={'left'}
                        tone={'wrong'}
                        text={'Во сколько у нас сегодня собрание по поводу дальнейших планов?'}
                    />
                    <DialogMessage
                        user={'right'}
                        tone={'wrong'}
                        text={'В 16:30'}
                    />
                </div>
            </div>
            
            <div className='vertical-line-div'></div>
            <div className='banner-column'>
                <h3>Попробуйте использовать</h3>
                <div className='dialog'>
                    <DialogMessage
                        user={'left'}
                        tone={'true'}
                        text={'Привет! У меня есть несколько вопросов по текущей задаче, предлагаю организовать видеовстречу завтра. Скажи во сколько тебе будет удобно, я все подготовлю и пришлю тебе ссылку!'}
                    />
                    <DialogMessage
                        user={'right'}
                        tone={'wrong'}
                        text={'Привет! Давай в 12:15, спасибо!'}
                    />
                </div>
                
            </div>
        </div>
        <h5 className='gray-text'>Узнать больше</h5>
    </div>
  )
}
