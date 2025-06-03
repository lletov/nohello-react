import React from 'react'
import { useTranslation } from "react-i18next";

export const Loader = () => {
  const { t } = useTranslation();
  return (
    <div className='loader'>
        <span className="spinner"></span>
        <p>{t("loading")}</p>
    </div>
  )
}
