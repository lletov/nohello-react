import React, { useContext } from 'react'
import Refresh from './../assets/refresh.png'
import Copy from './../assets/copy.png'
import { InputContext } from './Context'
import { useTranslation } from "react-i18next";

export const Message = ({messageValue, handleGenerate}) => {

  const { t } = useTranslation();
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
            <h3>{t("your_message")}</h3>
        </div>
        <div className='message'>
            <div>{messageValue}</div>
            <div className='message-btns'>
              <div 
                className='message-btn'
                onClick={(e) => handleGenerate(inp)}
              >
                <img src={Refresh}/>
                <p>{t("another_variant")}</p>
              </div>
              <div 
                className='message-btn'
                onClick={() => copyMessage(messageValue)}
              >
                <img src={Copy}/>
                <p>{t("copy")}</p>
              </div>
            </div>
        </div>
    </div>
  )
}
