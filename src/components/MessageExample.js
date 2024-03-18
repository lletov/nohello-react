import React from 'react'
import { cssVars } from '../CssVars'

export const MessageExample = ({text, tone}) => {
  return (
    <div 
        className='message-example' 
        style={{backgroundColor: tone =='right' ? cssVars.light_green : cssVars.light_orange, 
                color: tone =='right'? cssVars.green : cssVars.orange}}
    >
        { text }
    </div>
  )
}
