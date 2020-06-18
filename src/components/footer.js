import React from 'react'
import styled from 'styled-components'

// styles
const Container = styled.div`
  grid-area: footer;
  background: yellow;
`

const Footer = () => (
  <Container>
    <p>Footer</p>
  </Container>
)

export default Footer
