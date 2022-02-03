import styled from 'styled-components'

export const Container = styled.li`
  background-color: #FFF;
  & + & {
    margin-top: 1rem;
  }
  @media (min-width: 1350px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Header = styled.div`
  padding: 0.5rem;
  border-bottom: 2px solid ${({theme}) => theme.lightGrey };
  color: ${({theme}) => theme.veryDarkBlue };

  @media (min-width: 1350px) {
    border: none;
  }
`

export const ShortenedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    color: ${({theme}) => theme.primaryCyan };
    margin-bottom: 0.5rem;
  }

  @media (min-width: 1350px) {
    flex-direction: row;
    align-items: center;
    a {
      margin: 0;
      margin-right: 1rem;
    }
    a:hover {
      opacity: 0.8;
    }
  }
`

export const CopyButton = styled.button`
  color: #FFF;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 0;
  background-color: ${({copied, theme}) => copied ? theme.primaryViolet : theme.primaryCyan};
  border-radius: 8px;
  @media (min-width: 1350px) {
    padding: 0.3rem 1rem;
    &:hover {
      ${({copied, theme}) => copied ? `opacity: 0.8` : `background-color: ${theme.lightCyan}` };
    }
  }
`