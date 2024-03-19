import React from 'react'
import { cssVars } from '../CssVars'

export const DialogMessage = ({user, tone, text}) => {
    if (user == 'left') {
        return (
            <div 
                className='dialog-message'
                style={{backgroundColor: tone =='true' ? cssVars.light_green : cssVars.light_orange, 
                color: tone =='true'? cssVars.green : cssVars.orange,
                textAlign: 'left',
                marginRight: '120px'}}
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
                textAlign: 'right',
                marginLeft: '120px'}}
            >
            <p>{text}</p>
        </div>
        )
    }
}
