import React from 'react'
import { useContext } from 'react'
import { ErrorContext } from './Context'

export const Error = () => {
  const er = useContext(ErrorContext)
  return (
    <div className='error-place'>
        <p><strong>Ошибка</strong></p>
        <p>{er}</p>
    </div>
  )
}
