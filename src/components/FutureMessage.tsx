import React from 'react'
import { useTranslation } from "react-i18next";

export const FutureMessage = () => {

  const { t } = useTranslation();

  return (
    <div className='future-msg'>
        <p>{t("future_message")}</p>
    </div>
  )
}
