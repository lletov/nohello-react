import React from 'react'
import { cssVars } from '../CssVars'

export const DialogMessage = ({user, tone, text}) => {
    if (user == 'left') {
        return (
            <div 
                className='dialog-message'
                style={{backgroundColor: tone =='right' ? cssVars.light_green : cssVars.light_orange, 
                color: tone =='right'? cssVars.green : cssVars.orange,
                paddingRight: '40px'}}
            >
                <p>{text}</p>
            </div>
        )
    } else {
        return (
            <div 
                className='dialog-message'
                style={{backgroundColor: cssVars.light_gray, 
                color: cssVars.gray,
                paddingLeft: '40px'}}
            >
            <p>{text}</p>
        </div>
        )
    }
}
