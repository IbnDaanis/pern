import React from 'react'

export const EditTodo = ({ id }) => {
  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#myModal'>
        Edit
      </button>
      <div id='myModal' className='modal fade' role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='btn btn-primary close' data-bs-dismiss='modal'>
                &times;
              </button>
              <h4 className='modal-title'>Modal Header</h4>
            </div>
            <div className='modal-body'>
              <p>Some text in the modal.</p>
            </div>
            <div className='modal-footer'>
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
