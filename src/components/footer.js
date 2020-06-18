import React from 'react'
import styled from 'styled-components'

// styles
const Container = styled.div`
  grid-area: footer;
  background: #31200f;
`

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-gap: 2rem;
  background: #31200f;
  padding: 2rem 4rem;

  h3 {
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }

  p {
    color: #eae2b7;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.2em;
    letter-spacing: 0.2rem;
  }

  a {
    text-decoration: none;
    color: #fcb53b;
  }
`

const Hours = styled.div`
`

const Contact = styled.div`
`

const Address = styled.div`
  p {
    margin: 0;
    margin-bottom: 0.2rem;
  }
`

const Parking = styled.div`
  p {
    font-size: 0.9rem;
  }
`

const Copyright = styled.div`
  margin-left: 4rem;
  p {
    font-size: 0.7rem;
    color: #eae2b7;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.2em;
    letter-spacing: 0.2rem;
  }
`

const Footer = () => (
  <Container>
    <Body>
      <Hours>
        <h3>Restaurant Hours</h3>
        <p>Tue–Thu: 5:00pm–9:00pm</p>
        <p>Fri–Sat: 11:30am–2:30pm &amp; 5:00pm–10:00pm</p>
        <p>Sun–Mon: Closed</p>
      </Hours>
      <Contact>
        <h3>Contact Us</h3>
        <Address>
          <p>Our Address:</p>
          <p>351 N. Mulberry St</p>
          <p>Lancaster, PA 17603</p>
        </Address>
        <p>Phone: <a href="tel:+17178243964" title="Call Callaloo">717.824.3964</a></p>
      </Contact>
      <Parking>
        <h3>Parking Info</h3>
        <p>Off-street parking is now available! Heading north on Mulberry Street, it's the first lot on the left after crossing Lemon Street. There is often availability on Mulberry and Lemon streets near the restaurant, as well. </p>
      </Parking>
    </Body>
    <Copyright>
      <p>© 2020 Callaloo Trinidadian Kitchen</p>
    </Copyright>
  </Container>
)

export default Footer
