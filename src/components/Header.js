import React from 'react'
import { LANGUAGES } from "./../constants/index.ts";

export const Header = () => {
  return (
    <div className='header'>
        <div className='header-content'>
        <select defaultValue={"es"}>
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
