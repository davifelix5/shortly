import styled from 'styled-components'

import mobileFormBackgroundUrl from '../../assets/images/bg-shorten-mobile.svg'
import formBackgroundUrl from '../../assets/images/bg-shorten-desktop.svg'

export const Container = styled.div`
  background-color: ${({theme}) => theme.lightGrey };
  display: flex;
  flex-direction: column;
  @media (min-width: 1350px) {
    padding: 0 8rem;
  }
`

export const Form = styled.form`
  background: ${({theme}) => theme.primaryViolet } url(${mobileFormBackgroundUrl}) no-repeat top right / 200px;
  border-radius: 16px;
  margin: -4rem 1rem 1rem;
  padding: 1rem;

  @media (min-width: 1350px) {
    background: ${({theme}) => theme.primaryViolet } url(${formBackgroundUrl}) no-repeat center / cover;
    padding: 2rem;
    margin: -2rem 0 1rem;
    display: flex;
    justify-content: space-between;
  }
`

export const InputControl = styled.div`
  margin-bottom: 0.8rem;
  @media (min-width: 1350px) {
    width: 100%;
    margin: 0;
  }
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
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1350px) {
    width: 15rem;
    margin-left: 1rem;
    &:hover {
      background-color: ${({theme}) => theme.lightCyan };
    }
  }
`

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  @media (min-width: 1350px) {
    margin: 0;
  }
`

export const Loader = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border-width: 0.3rem;
  border-style: solid;
  border-color: ${({theme}) => theme.primaryVioler };
  border-top-color: ${({theme}) => theme.grey };

  animation: spin 1s infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
`