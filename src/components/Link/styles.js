import styled from 'styled-components'

export const Container = styled.li`
  background-color: #FFF;
  & + & {
    margin-top: 1rem;
  }
`

export const Header = styled.div`
  padding: 0.5rem;
  border-bottom: 2px solid ${({theme}) => theme.lightGrey };
  color: ${({theme}) => theme.veryDarkBlue };
`

export const ShortenedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    color: ${({theme}) => theme.primaryCyan };
    margin-bottom: 0.5rem;
  }
  a:hover {
    opacity: 0.8;
  }
`

export const CopyButton = styled.button`
  color: #FFF;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 0;
  background-color: ${({copied, theme}) => copied ? theme.primaryViolet : theme.primaryCyan}
`