import React, { useState } from 'react'

export const EditTodo = ({ todo }) => {
  return (
    <>
      <button
        type='button'
        className='btn btn-warning'
        data-bs-toggle='modal'
        data-bs-target={`#myModal-${todo.todo_id}`}>
        Edit
      </button>
      <div id={`myModal-${todo.todo_id}`} className='modal fade' role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='btn btn-default close' data-bs-dismiss='modal'>
                &times;
              </button>
              <h4 className='modal-title'>Edit Todo</h4>
            </div>
            <div className='modal-body'>
              <input type='text' className='form-control' value={todo.description} />
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-warning' data-bs-dismiss='modal'>
                Edit
              </button>
              <button type='button' className='btn btn-default' data-bs-dismiss='modal'>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
