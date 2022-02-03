import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({theme}) => theme.veryDarkBlue };
  padding: 2rem 0;
  @media (min-width: 1350px) {
    display: flex;
    justify-content: space-evenly;
  }
`

export const LogoContainer = styled.div`
  color: #FFF;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`

export const LinkGroups = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1350px) {
    flex-direction: row;
    flex-grow: 0.3;
    align-items: flex-start;
    font-size: 0.8rem;
  }
`

export const LinkGroup = styled.li`
  width: 90%;
  & + & {
    margin-top: 2rem;
  }
  @media (min-width: 1350px) {
    & + & {
      margin-top: 0;
    }
  }
`

export const GroupTitle = styled.h3`
  text-align: center;
  color: #FFF;
  margin-bottom: 1rem;
`

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
`

export const Link = styled.a`
  color: ${({theme}) => theme.grey };
  & + & {
    margin-top: 0.5rem;
  }
  @media (min-width: 1350px) {
    &:hover {
      color: ${({theme}) => theme.primaryCyan };
    }
  }
`

export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 2rem 0 0;
  a + a {
    margin-left: 1.5rem;
  }
  @media (min-width: 1350px) {
    margin: 0;
    a:hover {
      opacity: 0.8;
    }
  }
`
