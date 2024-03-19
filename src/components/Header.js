import React from 'react'
import DownArrow from './../assets/arrow_down.png'

export const Header = () => {
  return (
    <div className='header'>
        <div className='header-content'>
            <div className='lang-change-btn'>
            <h5>Русский</h5>
            <img src={DownArrow}/>
            </div>
        </div>
    </div>
  )
}
