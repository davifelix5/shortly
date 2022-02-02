import React from 'react'

import {
  Container, 
  ContentGroup, 
  Item, 
  ItemImage, 
  ItemList, 
} from './styles'

import brandIcon from '../../assets/images/icon-brand-recognition.svg'
import recodsIcon from '../../assets/images/icon-detailed-records.svg'
import customizeIcon from '../../assets/images/icon-fully-customizable.svg'

export default function Statistics() {
  return (
    <Container>
      <ContentGroup>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing
          across the web with our advanced 
          statistics dashboard
        </p>
      </ContentGroup>
      <ItemList>

        <Item>
          <ItemImage>
            <img src={brandIcon} alt="Brand recognition" />
          </ItemImage>
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each link. 
            Generic links don't mean a thing. 
            Branded links help instill confidence in you content
          </p>
        </Item>

        <Item>
          <ItemImage>
            <img src={recodsIcon} alt="Detailed records" />
          </ItemImage>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowking 
            when and where people angage with your content helps 
            inform better decisions
          </p>
        </Item>

        <Item>
          <ItemImage>
            <img src={customizeIcon} alt="Fully customizable" />
          </ItemImage>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability
            through customizable links, supercharging audience engagement
          </p>
        </Item>

      </ItemList>
    </Container>
  )
}