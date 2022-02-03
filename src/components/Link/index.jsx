import React, { useEffect, useState } from 'react'

import {
  Container,
  Header,
  ShortenedContainer,
  CopyButton,
} from './styles'

export default function Link({ link }) {

  const [isCopied, setIsCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(link.shortened)
    setIsCopied(true)
  }

  useEffect(() => {

    if (!isCopied) return

    const THREE_SECONDS = 3000

    const timeout = setTimeout(() => {
      setIsCopied(false)
    }, THREE_SECONDS)

    return () => {
      clearTimeout(timeout)
    }

  }, [isCopied])

  return (
    <Container >
      <Header>
        <p>{link.original}</p>
      </Header>
      <ShortenedContainer>
        <a 
          referrerPolicy="no-referrer" 
          target="_blank" 
          href={link.shortened}
        >
          {link.shortened}
        </a>
        <CopyButton 
          onClick={handleCopy}
          copied={isCopied}
          disabled={isCopied}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </CopyButton>
      </ShortenedContainer>     
    </Container>
  )
}