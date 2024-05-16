import React from 'react'

const AddStudent = () => {
  return (
    <div className='student-form-container'>
        <form className='student-form'>
            <h2>Add Student</h2>
            <div className='form-group'>
                <label htmlFor="roll"> Roll N°:</label>
            </div>
        </form>
    </div>
  )
}

export default AddStudent