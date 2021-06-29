import React, { useState, useEffect } from 'react'

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {}, [])

  return (
    <>
      <table className='table mt-5'>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  )
}
