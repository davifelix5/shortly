import styled from 'styled-components'

import background from '../../assets/images/bg-boost-desktop.svg'
import mobileBackground from '../../assets/images/bg-boost-mobile.svg'

export const Container = styled.section`
  background: ${({theme}) => theme.primaryViolet } url(${mobileBackground}) center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media (min-width: 1350px) {
    padding: 2rem 1rem;
    background: ${({theme}) => theme.primaryViolet } url(${background}) center / cover;
  }
`

export const Title = styled.h1`
  color: #FFF;
  margin-bottom: 1rem;
`

export const Button = styled.button`
  background-color: ${({theme}) => theme.primaryCyan };
  padding: 0.8rem 1.5rem;
  border-radius: 64px;
  color: #FFF;
  font-weight: bold;
  @media (min-width: 1350px) {
    &:hover {
      background-color: ${({theme}) => theme.lightCyan };
    }
  }
`