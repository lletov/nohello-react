import React from 'react'
import { LANGUAGES } from "../constants/index";
import { useTranslation } from "react-i18next";
import "../i18n.ts";

const isActive = ({ isActive }:{ isActive: boolean }) => `link ${isActive ? "active" : ""}`;


export const Header = () => {

  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  
  return (
    <div className='header'>
        <div className='header-content'>
        <select className='lang-change-btn' defaultValue={i18n.language} onChange={onChangeLang}>
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
        </div>
    </div>
  )
}
