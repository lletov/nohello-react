import React from 'react'
import { MessageExample } from './MessageExample'
import { useTranslation } from "react-i18next";

export const Reasons = () => {
  
  const { i18n, t } = useTranslation();

  return (
    <div className='content reasons' id='reasons'>
      <div className='reasons-title'>
        <h2>{t("importance_q")}</h2>
      </div>
      <div className='text-columns'>
        <div className='text-column'>
          <p>{t("first_paragraph")}</p>
          <p>{t("second_paragraph")}</p>
        </div>
        <div className='text-column'>
          <p>{t("third_paragraph")}</p>
          <p>{t("fourth_paragraph")}</p>
          <p>{t("fifth_paragraph")}</p>
        </div>
      </div>
      <div className='examples'>
        <div>
          <h3>{t("more_examples")}</h3>
        </div>
        <div className='example-block'>
          <p>{t("instead")}</p>
          <div className='example-row'>
            <MessageExample text={t("wrong_ex_1")} tone={'wrong'}/>
            <MessageExample text={t("wrong_ex_2")} tone={'wrong'}/>
            <MessageExample text={t("wrong_ex_3")} tone={'wrong'}/>
            <MessageExample text={t("wrong_ex_4")} tone={'wrong'}/>
          </div>
        </div>
        <div  className='example-block'>
          <p>{t("try_use")}</p>
          <div className='example-row'>
            <MessageExample text={t("true_ex_1")} tone={'right'}/>
            <MessageExample text={t("true_ex_2")} tone={'right'}/>
            <MessageExample text={t("true_ex_3")} tone={'right'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
