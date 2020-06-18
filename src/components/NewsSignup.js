import React from 'react'
import styled from 'styled-components'

// styles
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

const NewsSignup = () => (
  <NewsContainer>
    <h3>Sign up for news and upcoming specials</h3>
    <input />
    <button>Join</button>
  </NewsContainer>
)

export default NewsSignup
