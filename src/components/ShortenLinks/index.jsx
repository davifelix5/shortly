import React, { useState } from 'react'

import Link from '../Link'

import {
  Container,
  Form,
  InputControl,
  ErrorMessage,
  Input,
  Button,
  Links,
} from './styles'

export default function ShortenLinks() {

  const [error, setError] = useState('')
  const [links, setLinks] = useState([
    {
      original: 'https://frontendmentor.io',
      shortened: 'https://rel.ink/k4lKyk'
    },
    {
      original: 'https://github.com/davifelix5',
      shortened: 'https://rel.ink/j7l1Kk'
    }
  ])

  function handleShortenSubmit(event) {
    event.preventDefault()
  }

  function getLinkCode(link) {
    return link.split('/').pop()
  }

  return (
    <Container>
      <Form onSubmit={handleShortenSubmit}>
        <InputControl>
          <Input error={Boolean(error)} placeholder="Shorten your link here..." />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputControl>
        <Button type="submit">Shorten It!</Button>
      </Form>
      <Links>
        {links.map(link => {
          const code = getLinkCode(link.shortened)
          return (
            <Link key={code} link={link}/>
          )
        })}
      </Links>
    </Container>
  )
}