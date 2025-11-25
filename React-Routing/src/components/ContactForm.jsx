import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email'/>
            <textarea placeholder='message' id=""></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm