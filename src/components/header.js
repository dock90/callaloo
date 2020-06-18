import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import Background from '../img/header-background.jpg'
import LogoImg from '../img/header-logo.png'
import FbIcon from '../img/fbIcon.png'
import IgIcon from '../img/igIcon.png'
import YlpIcon from '../img/yelpIcon.png'

const Container = styled.div`
  grid-area: header;
  background-image: url(${Background});
  display: grid;
  padding: 0 1rem;
`

const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
  justify-items: center;
  margin-top: 1rem;
`

const Phone = styled.div`
  display: grid;
  align-content: center;

  h5 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1rem;
    color: #4a3728;
    margin: 0;
  }

  a {
    text-decoration: none;
    font-size: 1.8rem;
    color: #4a3728;
    font-weight: 600;
  }
`

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  align-content: center;
  border-bottom: 4px solid white;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #FFFFFF;

    :hover {
      color: #4a3728;
    }
  }
`
const Social = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;

  @media only screen and (max-width: 767px), only screen and (max-device-width: 767px) {
    display: none;
  }
`

const SocialLink = styled.a`
  text-decoration: none;
`

const SocialIcon = styled.img`
  height: 40px;
  width: 40px;
`

const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
  justify-self: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`

const Header = () => (
  <Container>
    <Nav>
      <Phone>
        <h5>Call and order now!</h5>
        <a href="tel:+17178243964" title="Call Callaloo">717.824.3964</a>
      </Phone>
      <Links>
        <Link to="/menu">Menu</Link>
        <a href="https://orders.cake.net/10917448" target="_blank" rel="noopener noreferrer">
          Online Ordering
        </a>
      </Links>
      <Social>
        <SocialLink href="https://www.facebook.com/callalootrinidadiankitchen/">
          <SocialIcon src={FbIcon} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/callalootrinidadiankitchen/">
          <SocialIcon src={IgIcon} />
        </SocialLink>
        <SocialLink href="https://www.yelp.com/biz/callaloo-lancaster?osq=Trinidadian">
          <SocialIcon src={YlpIcon} />
        </SocialLink>
      </Social>
    </Nav>
    <Logo src={LogoImg} />
  </Container>
)

export default Header
