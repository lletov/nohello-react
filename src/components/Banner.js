import React from 'react'

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
            <div>
                Wrong
            </div>
            <div className='vertical-line-div'></div>
            <div>
                True
            </div>
        </div>
        <h5 className='gray-text'>Узнать больше</h5>
    </div>
  )
}
