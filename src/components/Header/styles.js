import styled from 'styled-components'

export const Container = styled.header`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.3rem 1rem;
`

export const Burguer = styled.button`
  background: none;
  @media (min-width: 1375px) {
    display: none;
  }
`

export const Navbar = styled.nav`
  position: absolute;
  width: 90vw;
  top: 100%;
  left: 50%;
  border-radius: 8px;
  
  background-color: ${({theme}) => theme.primaryViolet};
  color: #FFF;
  padding: 1rem 2rem;
  
  transform: translate(-50%, 100%);
  opacity: 0;
  z-index: -100;
  visibility: hidden;
  &.show {
    transform: translate(-50%, 0);
    z-index: 100;
    opacity: 1;
    visibility: visible;
  }
  transition: all 0.4s;

  @media (min-width: 1375px) {

  }
`

export const LinksContainer = styled.ul`
  border-bottom: 1px solid ${({theme}) => theme.grey};
  padding-bottom: 0.5rem;
`

export const ActionsContainer = styled.ul`
  padding-top: 0.5rem;
`

export const Link = styled.li`
  padding: 1rem;
  font-weight: bold;
  text-align: center;
`

export const MainAction = styled(Link)`
  padding: 1rem 0;
  a {
    display: block;
    background-color: ${({theme}) => theme.primaryCyan};
    border-radius: 32px;
    width: 100%;
    padding: 0.5rem 0;
  }
`