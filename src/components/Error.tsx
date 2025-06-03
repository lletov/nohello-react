import React from 'react'
import { useContext } from 'react'
import { ErrorContext } from './Context'
import { useTranslation } from "react-i18next";

export const Error = () => {
  const { t } = useTranslation();
  const er = useContext(ErrorContext)
  return (
    <div className='error-place'>
        <p><strong>{t("error")}</strong></p>
        <p>{er}</p>
    </div>
  )
}
