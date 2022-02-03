import styled from 'styled-components'

export const Container = styled.header`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.3rem 1rem;

  @media (min-width: 1350px) {
    padding: 1.3rem 8rem;
  }
`

export const Burguer = styled.button`
  background: none;
  @media (min-width: 1350px) {
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

  @media (min-width: 1350px) {
    position: static;
    &.show {
      transform: none; 
    }
    z-index: 1;
    opacity: 1;
    visibility: visible;
    transform: none;
    background: none;
    padding: 0;
    transition: none;
    
    padding-left: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme}) => theme.grey };
  }
`

export const LinksContainer = styled.ul`
  border-bottom: 1px solid ${({theme}) => theme.grey};
  padding-bottom: 0.5rem;
  @media (min-width: 1350px) {
    border: none;
    display: flex;
    align-items: center;
    padding: 0;
  }
`

export const ActionsContainer = styled.ul`
  padding-top: 0.5rem;
  @media (min-width: 1350px) {
    display: flex;
    align-items: center;
    padding: 0;
  }
`

export const Link = styled.li`
  padding: 1rem;
  font-weight: bold;
  text-align: center;

  @media (min-width: 1350px) {
    font-weight: 500;
    a:hover {
      color: ${({theme}) => theme.veryDarkBlue };
    }
  }
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
  @media (min-width: 1350px) {
    a {
      color: #FFF;
      padding: 8px 1rem; 
      margin-left: 15px;
    }

    a:hover {
      color: #FFF;
      background-color: ${({theme}) => theme.lightCyan };
    }
  }
`