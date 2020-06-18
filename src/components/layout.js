import React from 'react'
import styled from 'styled-components'
// components
import Header from './header'
import Footer from './footer'

// styles
const Container = styled.div`
  display: grid;

  grid-template-areas:
    "header"
    "content"
    "footer";

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;

  height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>

  )
}

export default Layout
