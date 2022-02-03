import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  background-color: ${({theme}) => theme.lightGrey };;
  padding: 4rem 0;
  z-index: -100;
`

export const ContentGroup = styled.div`
  text-align: center;
  h1 {
    margin-bottom: 1rem;
    color: ${({theme}) => theme.veryDarkViolet };
  }
  p {
    color: ${({theme}) => theme.greyViolet };
    padding: 0 1.5rem;
  }
`

export const ItemList = styled.ul`
  padding: 0 1.5rem;
`

export const Item = styled.li`
  position: relative;
  background-color: #FFF;
  margin-top: 5rem;
  padding: 4.5rem 1.5rem 3rem;
  border-radius: 4px;
  text-align: center;
  h2 {
    color: ${({theme}) => theme.veryDarkViolet };
    margin-bottom: 1rem;
  }
  p {
    color: ${({theme}) => theme.grey };
  }
  & + &::after {
    content: ' ';
    position: absolute;
    width: 5px;
    height: 5rem;
    right: 50%;
    top: -5rem;
    transform: translateX(50%);
    background-color: ${({theme}) => theme.primaryCyan };
    z-index: -150;
  }
`

export const ItemImage = styled.div`
  background-color: ${({theme}) => theme.primaryViolet };
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  
  position: absolute;
  right: 50%;
  top: -15%;
  transform: translateX(50%);
`