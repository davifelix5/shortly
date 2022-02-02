import React from 'react'

import {
  Container,
  Input,
  Button
} from './styles'

export default function Form() {

  function handleShortenSubmit(event) {
    event.preventDefault()
  }

  return (
    <Container onSubmit={handleShortenSubmit}>
      <Input placeholder="Shorten your link here..." />
      <Button type="submit">Shorten It!</Button>
    </Container>
  )
}