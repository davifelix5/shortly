import styled from 'styled-components'

import mobileFormBackgroundUrl from '../../assets/images/bg-shorten-mobile.svg'
import formBackgroundUrl from '../../assets/images/bg-shorten-desktop.svg'

export const Container = styled.div`
  background-color: ${({theme}) => theme.lightGrey };
  display: flex;
  flex-direction: column;
`

export const Form = styled.form`
  background: ${({theme}) => theme.primaryViolet } url(${mobileFormBackgroundUrl}) no-repeat top right / 200px;
  border-radius: 16px;
  margin: -4rem 1rem 1rem;
  padding: 1rem;
`

export const InputControl = styled.div`
 margin-bottom: 0.8rem;
`

export const ErrorMessage = styled.p`
  text-decoration: italic;
  color: red;
  font-size: 0.8rem;
`

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 1rem;
  margin-bottom: 3px;
  border-radius: 4px;
  &::placeholder {
    opacity: 0.5;
    color: ${({error, theme}) => error ? 'red' : theme.veryDarkBlue };
    font-weight: bold;
  }
  &:focus {
    outline: 3px solid ${({theme}) => theme.primaryCyan };
  }
  outline: ${(props) => props.error ? '2px solid red' : 'none'};
`

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  font-weight: bold;
  background-color: ${({theme}) => theme.primaryCyan };
  color: #FFF;
  font-size: 1rem;
`

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`