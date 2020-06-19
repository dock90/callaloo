import React from 'react'
import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  height: 100vh;
  justify-items: center;
  align-content: center;
`

const ErrorPage = () => (
  <Container>
    <h1>Oh My - This wasnt supposed to happen!</h1>
    <p>It seems like you have run into an error. Sorry about that!</p>
  </Container>
)


export default ErrorPage
