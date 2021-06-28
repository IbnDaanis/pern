import React, { useState } from 'react'

export const InputTodo = () => {
  const [state, setState] = useState(0)

  return (
    <>
      <h1 className='text-center my-5'>Input Todo</h1>
      <form className='d-flex'>
        <input type='text' className='form-control' placeholder='Add Todo' />
        <button type='submit' className='btn btn-success '>
          Add
        </button>
      </form>
    </>
  )
}
