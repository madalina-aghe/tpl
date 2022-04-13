import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import emailkey from '../../utils/emailkey'
import './Contact.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault() // Prevents default refresh by the browser
    emailjs
      .sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, form.current, emailkey.PUBLIC_KEY)
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text)
          alert('Mesaj trimis cu succes!')
        },
        (error) => {
          console.log('FAILED...', error)
        }
      )
  }

  return (
    <div className='contact'>
      <Form onSubmit={handleSubmit} ref={form}>
        <Form.Group className='mb-3'>
          <Form.Label>Prenume</Form.Label>
          <Form.Control type='input' placeholder='Introduceti prenumele' name='from_firstname' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Nume</Form.Label>
          <Form.Control type='input' placeholder='Introduceti numele' name='from_lastname' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Introduceti adresa de email' name='user_email' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Mesaj</Form.Label>
          <Form.Control as='textarea' rows={3} name='message' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Contact
