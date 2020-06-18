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

const NewsContainer = styled.div`
  background: #31200f;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  align-items: center;
  padding: 1rem 3rem;

  h3 {
    margin: 0;
    color: #eae2b7;
    text-transform: uppercase;
  }

  input {
    height: 40px;
    border: 2px solid #eae2b7;
  }

  button {
    max-width: 160px;
    height: 46px;
    background: #31200f;
    text-transform: uppercase;
    color: white;
    font-size: 1rem;
    letter-spacing: 0.18rem;
    border: 2px solid #eae2b7;
    cursor: pointer;
  }
`

const Header = () => (
  <Container>
    <Nav>
      <Phone>
        <h5>Call and order now!</h5>
        <a href="tel:+17178243964">717.824.3964</a>
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
    <NewsContainer>
      <h3>Sign up for news and upcoming specials</h3>
      <input />
      <button>Join</button>
    </NewsContainer>
  </Container>
)

export default Header
