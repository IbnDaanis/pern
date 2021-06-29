import React, { useState } from 'react'

export const InputTodo = () => {
  const [description, setDescription] = useState('')

  return (
    <>
      <h1 className='text-center my-5'>Input Todo</h1>
      <form className='d-flex'>
        <input
          type='text'
          className='form-control'
          placeholder='Add Todo'
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <button type='submit' className='btn btn-success '>
          Add
        </button>
      </form>
    </>
  )
}
