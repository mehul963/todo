import React from 'react'
import './css/card.css'
export default function Card({title,body}) {
  return (
    <div className='card'>
        <h2 className='title'>{title}</h2>
        <p className='body'>{body}</p>
    </div>
  )
}
