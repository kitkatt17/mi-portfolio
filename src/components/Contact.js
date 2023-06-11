import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Form, Input, Message } from 'semantic-ui-react'
import { ThemeContext } from '../ThemeContext'

export const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const { theme} = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(emailError || nameError || messageError)) {
      setSuccess(true)
      setEmail('');
      setName('');
      setMessage('');
      e.target.reset();
      return
    }
    setSuccess(false)
  }

  const onNameChange = (e) => {
    const name = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (name === '' || !regex.test(name)) {
      setNameError(true);
      setName('');
    } else {
      setNameError(false);
      setName(name);
    }
  };

  const onEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/
    if (e.target.value === '' || !emailRegex.test(e.target.value)) {
      setEmailError(true)
      setEmail('')
    } else {
      setEmailError(false)
      setEmail(e.target.value)
    }
  }

  const onMessageChange = (e) => {
    if (e.target.value === '') {
      setMessageError(true)
      setMessage('')
    } else {
      setMessageError(false)
      setMessage(e.target.value)
    }
  }


  return (
    <Container className={"mt-5"} id='contact'>
      <h2 className={theme==="dark"?"ui horizontal divider header mt-5 mb-5 text-dark":"ui horizontal divider header mt-5 mb-5 text-dark"}>
        Contact Me
      </h2>
      {success && <Message
        success
        header='Success'
        content="Message sent successfully!"
      />}
      <Form onSubmit={handleSubmit} >
        <Form.Field
          control={Input}
          label='Name'
          placeholder='Eg: John Doe'
          required
          onChange={onNameChange}
          error={nameError && {
            content: 'Please enter a valid name',
            pointing: 'below',
          }}
        />
        <Form.Field
          control={Input}
          label='Email'
          placeholder='Eg: email@example.com'
          required
          onChange={onEmailChange}
          error={emailError && {
            content: 'Please enter a valid email address',
            pointing: 'below',
          }}

        />
        <Form.TextArea
          label='Message'
          placeholder='Type your message here'
          required
          onChange={onMessageChange}
          error={messageError && {
            content: 'Please enter a valid message',
            pointing: 'below',
          }} />
        <Form.Button positive disabled={name === "" || email === "" || message === ""}>Send {" "}<i className="telegram plane icon"></i></Form.Button>
      </Form>
    </Container>
  )
}
