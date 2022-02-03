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
  Loader,
} from './styles'

import api from '../../services/api'

import usePersistedState from '../../hooks/usePersistedState'

export default function ShortenLinks() {

  const [error, setError] = useState('')
  const [inputedLink, setInputedLink] = useState('')
  const [loading, setLoading] = useState(false)
  const [links, setLinks] = usePersistedState([], 'SHORTLY__links')

  async function shortenLink(link) {
    const { data } = await api.get('shorten', {
      params: {
        url: link
      }
    })

    return data.result

  }

  async function handleShortenSubmit(event) {
    event.preventDefault()

    const LINK_NOT_INFORMED_ERROR_CODE = 1
    const INVALID_LINK_ERROR_CODE = 2

    try {
      setError('')
      setLoading(true)
      const { full_short_link } = await shortenLink(inputedLink)
      const newLink = { original: inputedLink, shortened: full_short_link }
      setLinks(links => [...links, newLink])
    } catch (err) {
      const { data: { error_code } } = err.response
      if (error_code === LINK_NOT_INFORMED_ERROR_CODE || error_code === INVALID_LINK_ERROR_CODE) {
        return setError('Please, inform a valid link')
      }
      setError('There has been an error')
    } finally {
      setLoading(false)
    }
  }

  function getLinkCode(link) {
    return link.split('/').pop()
  }

  return (
    <Container>
      <Form onSubmit={handleShortenSubmit}>
        <InputControl>
          <Input 
            error={Boolean(error)} 
            placeholder="Shorten your link here..." 
            value={inputedLink} 
            onChange={event => setInputedLink(event.target.value)}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputControl>
        <Button type="submit">{loading ? <Loader /> : 'Shorten It!'}</Button>
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