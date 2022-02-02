import styled from 'styled-components'

export const Container = styled.div``

export const ImageContainer = styled.div`
  img {
    width: 130%;
    margin-left: 10px;
  }
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  text-align: center;
  color: ${({theme}) => theme.veryDarkViolet };
  margin-bottom: 0.5rem;
`

export const Text = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: ${({theme}) => theme.greyViolet };
`

export const MainButton = styled.button`
  margin-top: 1rem;
  background-color: ${({theme}) => theme.primaryCyan };
  padding: 0.8rem 1.5rem;
  border-radius: 64px;
  color: #FFF;
  font-weight: bold;
  font-size: 1.05rem;
`
