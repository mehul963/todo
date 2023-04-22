import React from 'react'

export default function Todo({idx,desc,isDone,setIsDone,deleteTodo}) {
  return (
      <tr className='center-div' key={idx}>
        <td>{idx}</td>
        <td className='description'>{desc}</td>
        {
          <td><input type="checkbox" onChange={(e)=>{setIsDone(e,idx-1)}} checked={isDone} /> </td>
        }

        <td className='danger' onClick={(e)=>{deleteTodo(e,idx-1)}}>Delete</td>
      </tr>
  )
}
