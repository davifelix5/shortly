import React, { useState } from 'react'

import logo from '../../assets/images/logo.svg'

import { FiMenu } from 'react-icons/fi'

import { 
  Container,
  Navbar,
  LinksContainer,
  ActionsContainer,
  Link,
  MainAction,
  Burguer
} from './styles'

export default function Header() {
  const [show, setShow] = useState(false)

  function toggleMenu() {
    setShow((show) => !show)
  }

  return (
    <Container>
      <img src={logo} alt="Shortly" />
      <Burguer onClick={toggleMenu}>
        <FiMenu size={30} color="#666"/>
      </Burguer>
      <Navbar className={`${show ? 'show' : ''}`} aria-label={`${show} ? '' : 'hidden'`}>
        <LinksContainer>
          <Link><a href="#">Features</a></Link>
          <Link><a href="#">Pricing</a></Link>
          <Link><a href="#">Resources</a></Link>
        </LinksContainer>
        <ActionsContainer>
          <Link><a href="#">Log in</a></Link>
          <MainAction><a href="#">Sign Up</a></MainAction>
        </ActionsContainer>
      </Navbar>
    </Container>  
  )
}