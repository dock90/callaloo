import React from "react"
import styled from 'styled-components'
// components
import Layout from '../components/layout'
// images
import Background from '../img/content-background.jpg'
import Img1 from '../img/content-creative1.jpg'
import Img2 from '../img/content-creative2.jpg'
import Img3 from '../img/content-creative3.jpg'

// styles
const Container = styled.div`
  grid-area: content;
  background: url(${Background}) #f9f8ed center;
  display: grid;
  justify-content: center;
  grid-gap: 1rem;
`

const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  margin: 4rem 4rem 2rem 4rem;
`

const IntroHeading = styled.div`
  border-bottom: 29px solid #81c341;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #31200f;
    margin: 0;
    margin-bottom: -1.3rem;
    max-width: 600px;
    text-align: center;
    line-height: 3rem;
  }
`

const IntroBody = styled.p`
  max-width: 700px;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2rem;
  text-align: center;
  letter-spacing: 0.05rem;
`

const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
  justify-items: center;
  margin: 2rem;
`

const FoodPhoto = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
`

const Home = () => {
  return (
    <Layout>
      <Container>
        <IntroContainer>
          <IntroHeading>
            <h1>Trinidadian Comfort Foods, Creatively Re-imagined</h1>
          </IntroHeading>
          <IntroBody>At Callaloo, our passion is to create delicious food through chef-driven creativity and authentic Trinidadian flavor. As a colonial-Caribbean island nation, Trinidad & Tobago’s cuisine is a rich fusion of many traditions and cultures. Pair the south-Asian and African-creole influences with the availability of unique tropical ingredients, and you get an unforgettable and inspiring range of flavors and combinations.
          </IntroBody>
        </IntroContainer>
        <Photos>
          <FoodPhoto src={Img1} />
          <FoodPhoto src={Img2} />
          <FoodPhoto src={Img3} />
        </Photos>
      </Container>
    </Layout>
  )
}

export default Home
