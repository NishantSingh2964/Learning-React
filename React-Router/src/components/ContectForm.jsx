import React from 'react'

const ContectForm = () => {
  return (
    <div className='form-class'>
      <form>
        <input type="text" placeholder='Name' />
        <br />
        <input type="email" placeholder='Email' />
        <br />
        <textarea placeholder='Message'></textarea>
        <br />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default ContectForm
