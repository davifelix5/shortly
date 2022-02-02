import React from 'react'

import {
  Container,
  ImageContainer,
  Content,
  Title,
  Text,
  MainButton,
} from './styles'

import illustration from '../../assets/images/illustration-working.svg'

export default function Hero() {
  return (
    <Container>
      <ImageContainer>
        <img src={illustration} alt="Shotly banner" />
      </ImageContainer>
      <Content>
        <Title>More than just shorter links</Title>
        <Text>
          Build your brands's recognition and 
          get detailed insights on how 
          yours links are performing
        </Text>
        <MainButton>Get Started</MainButton>
      </Content>
    </Container>
  )
}