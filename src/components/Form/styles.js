import styled from 'styled-components'

import mobileFormBackgroundUrl from '../../assets/images/bg-shorten-mobile.svg'
import formBackgroundUrl from '../../assets/images/bg-shorten-desktop.svg'

export const Container = styled.form`
  background: ${({theme}) => theme.primaryViolet } url(${mobileFormBackgroundUrl}) no-repeat top right / 200px;
  border-radius: 16px;
  margin: 4rem 1rem;
  padding: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  &::placeholder {
    color: ${({theme}) => theme.veryDarkBlue };
    font-weight: bold;
  }
  &:focus {
    outline: 3px solid ${({theme}) => theme.primaryCyan };
  } 
`

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  font-weight: bold;
  background-color: ${({theme}) => theme.primaryCyan };
  color: #FFF;
  font-size: 1rem;
`

