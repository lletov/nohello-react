import React from 'react'

export const Notification = ({text}:{text:string}) => {
  return (
    <div className='notification'>
        <p>{text}</p>
    </div>
  )
}
