import React from 'react'

export const Error = ({err}) => {
  return (
    <div className='error-place'>
        <p>Ошибка: {err}</p>
    </div>
  )
}
