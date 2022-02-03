import React from 'react'

import {
  Container,
  LogoContainer,
  LinkGroups,
  LinkGroup,
  GroupTitle,
  Links,
  Link,
  Contacts,
} from './styles'

import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'
import twitter from '../../assets/images/icon-twitter.svg'

export default function Footer() {
  return (
    <Container>
      <LogoContainer>
        <p translate="no">Shortly</p>
      </LogoContainer>
      <LinkGroups>

        <LinkGroup>
          <GroupTitle>Features</GroupTitle>
          <Links>
            <Link href="#">Link</Link>
            <Link href="#">Branded Links</Link>
            <Link href="#">Analytics</Link>
          </Links>
        </LinkGroup>

        <LinkGroup>
          <GroupTitle>Resources</GroupTitle>
          <Links>
            <Link href="#">Blog</Link>
            <Link href="#">Developers</Link>
            <Link href="#">Support</Link>
          </Links>
        </LinkGroup>

        <LinkGroup>
          <GroupTitle>Company</GroupTitle>
          <Links>
            <Link href="#">About</Link>
            <Link href="#">Our team</Link>
            <Link href="#">Carrers</Link>
            <Link href="#">Contact</Link>
          </Links>
        </LinkGroup>

      </LinkGroups>

      <Contacts>
        <a href="#">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="#">
          <img src={pinterest} alt="Pinterest" />
        </a>
        <a href="#">
          <img src={instagram} alt="Instagram" />
        </a>
      </Contacts>
    </Container>
  )
}