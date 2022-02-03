import styled from 'styled-components'

export const Container = styled.section`
  padding-bottom: 8rem;
  @media (min-width: 1350px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 1.5rem;
  }
`

export const ImageContainer = styled.div`
  img {
    width: 130%;
    margin-left: 10px;
  }
  overflow: hidden;
`

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  @media (min-width: 1350px) {
    text-align: initial;
    align-items: flex-start;
    padding: 0 4rem 0 8rem;
  }

`

export const Title = styled.h1`
  color: ${({theme}) => theme.veryDarkBlue };
  margin-bottom: 0.5rem;
  @media (min-width: 1350px) {
    font-size: 3rem;
  }
`

export const Text = styled.p`
  font-size: 0.8rem;
  color: ${({theme}) => theme.greyViolet };
  @media (min-width: 1350px) {
    font-size: 1rem;
  }
`

export const MainButton = styled.button`
  margin-top: 1rem;
  background-color: ${({theme}) => theme.primaryCyan };
  padding: 0.5rem 1.5rem;
  border-radius: 64px;
  color: #FFF;
  font-weight: bold;
  font-size: 1rem;
  @media (min-width: 1350px) {
    &:hover {
      background-color: ${({theme}) => theme.lightCyan };
    }
  }
  
`
