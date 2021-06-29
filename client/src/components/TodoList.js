import React, { useState, useEffect } from 'react'

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    const response = await fetch('http://localhost:5000/todos')
    const data = await response.json()

    setTodos(data)
  }

  useEffect(() => {
    getTodos()
  }, [])

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
        <tbody>
          {todos?.map(todo => (
            <tr key={todo.todo_id}>
              <th scope='row'>{todo.description}</th>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
