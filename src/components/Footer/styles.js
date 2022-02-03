import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({theme}) => theme.veryDarkBlue };
  padding: 2rem 0;
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
`

export const LinkGroup = styled.li`
  width: 90%;
  & + & {
    margin-top: 2rem;
  }
`

export const GroupTitle = styled.h3`
  text-align: center;
  color: #FFF;
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Link = styled.a`
  color: ${({theme}) => theme.grey };
  & + & {
    margin-top: 0.5rem;
  }
`

export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 0;
  a + a {
    margin-left: 1.5rem;
  }
`
