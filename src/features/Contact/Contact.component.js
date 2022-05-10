import React, { useRef, useState } from 'react'
import emailkey from '../../utils/emailkey'
import './Contact.scss'
import emailjs from '@emailjs/browser'
import { Button, Input } from 'antd'

const Contact = () => {
  //State
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [areFormFieldsTouched, setAreFormFieldsTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false
  })

  const checkTextInputValidity = (value) => value.length > 2
  const checkEmailValidity = (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)

  const isFormInvalid =
    !checkTextInputValidity(formFields.firstName) ||
    !checkTextInputValidity(formFields.lastName) ||
    !checkEmailValidity(formFields.email) ||
    !checkTextInputValidity(formFields.message)

  const form = useRef()

  const resetForm = () => {
    setFormFields({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    })
    setAreFormFieldsTouched({
      firstName: false,
      lastName: false,
      email: false,
      message: false
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault() // Prevents default refresh by the browser

    if (isFormInvalid) {
      return
    }

    emailjs
      .sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, form.current, emailkey.PUBLIC_KEY)
      .then(
        () => {
          alert('Mesaj trimis cu succes!')
        },
        (error) => {
          console.log('FAILED...', error)
        }
      )

    resetForm()
  }

  const handleFormFieldChange = (field, value) => {
    setFormFields((lastState) => ({
      ...lastState,
      [field]: value
    }))
    setAreFormFieldsTouched((lastState) => ({
      ...lastState,
      [field]: true
    }))
  }

  return (
    <form ref={form} className='contact' onSubmit={handleSubmit}>
      <h1>Formular de contact</h1>
      <div>
        Pentru sugestii sau sesizări ne puteţi contacta la: contact@tpl-sv.ro sau
        Tel/Fax(secretariat): 0330 401 442 SC TRANSPORT PUBLIC LOCAL SA Str. Traian Vuia nr. 5 A,
        Suceava, 720 021, ROMANIA
      </div>

      <div>
        <div>Prenume</div>
        <Input
          value={formFields.firstName}
          placeholder='Introduceti prenumele'
          name='from_firstname'
          onChange={(event) => handleFormFieldChange('firstName', event.target.value)}
          status={
            !checkTextInputValidity(formFields.firstName) && areFormFieldsTouched.firstName
              ? 'error'
              : ''
          }
        />
      </div>
      <div>
        <div>Nume</div>
        <Input
          value={formFields.lastName}
          placeholder='Introduceti numele'
          name='from_lastname'
          onChange={(event) => handleFormFieldChange('lastName', event.target.value)}
          status={
            !checkTextInputValidity(formFields.lastName) && areFormFieldsTouched.lastName
              ? 'error'
              : ''
          }
        />
      </div>
      <div>
        <div>Email</div>
        <Input
          value={formFields.email}
          placeholder='Introduceti adresa de email'
          name='user_email'
          onChange={(event) => handleFormFieldChange('email', event.target.value)}
          status={
            !checkEmailValidity(formFields.email) && areFormFieldsTouched.email ? 'error' : ''
          }
        />
      </div>
      <div>
        <div>Mesaj</div>
        <Input.TextArea
          value={formFields.message}
          rows={3}
          autoSize={{ minRows: 3, maxRows: 5 }}
          name='message'
          onChange={(event) => handleFormFieldChange('message', event.target.value)}
          status={
            !checkTextInputValidity(formFields.message) && areFormFieldsTouched.message
              ? 'error'
              : ''
          }
        />
      </div>
      <Button htmlType='submit' type={isFormInvalid ? 'ghost' : 'primary'}>
        Trimite
      </Button>

      <small
        style={{
          padding: '20px',
          marginTop: '50px'
        }}
      >
        Mesajele anonime sau cele în care nu sunt trecute datele de identificare a petiţionarului nu
        se iau în considerare (art. 7 din OG nr. 27/2002 privind reglementarea activităţii de
        soluţionare a petiţiilor cu modificările ulterioare).
        <br /> Deasemenea mesajele care conţin cuvinte injurioase nu se iau în considerare.
        Petiţionarul îsi asumă întreaga responsabilitate pentru datele furnizate. Prin PETIŢIE se
        înţelege cererea, reclamaţia, sesizarea sau propunerea formulată în scris ori prin poşta
        electronică, pe care un cetăţean sau o organizaţie legal constituită o poate adresa
        autorităţilor şi instituţiilor publice centrale şi locale, serviciilor publice
        descentralizate ale ministerelor şi ale celorlalte organe centrale, companiilor si
        societăţilor naţionale, societăţilor comerciale de interes judeţean sau local, precum şi
        regiilor autonome, denumite în continuare autorităţi şi instituţii publice. (art. 2 din OG
        nr. 27/2002 privind reglementarea activităţii de soluţionare a petiţiilor cu modificările
        ulterioare).
      </small>
    </form>
  )
}

export default Contact
