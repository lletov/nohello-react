import React from 'react'

export const Footer = () => {
  return (
    <div className='content gray-text footer'>
        <div style={{paddingTop: '120px'}}>
        <p>* Это шутливые рекомендации (но в каждой шутке…), поэтому, пожалуйста, не злитесь на того, кто отправил Вас сюда.
Если Вы увидите URL этого сайта в чьем-то статусе/био, будьте готовы к тому, что Вас проигнорируют, если вы напишите в сообщении только "Привет!". Основано на nohello.com</p>
    </div>
        <hr/>
        <div className='footer-content'>
            <div className='footer-content-row'>
                <p>Copyright © 2024</p>
                <a href=''>О проекте</a>
                <a href=''>Страница проекта на GitHub</a>
            </div>
            <div>
                Язык: Русский
            </div>
        </div>
    </div>
  )
}
