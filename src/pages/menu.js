import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
// components
import Layout from '../components/layout'

// styles
const Container = styled.div`
  display: grid;
  justify-items: center;
`

const Category = styled.h2`
  font-size: 2rem;
  color: #31200f;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`

const Menu = () => {
  const categoriesData = useStaticQuery(graphql`
    query MENU_CATEGORIES_QUERY {
      allSanityMenuCategory {
        nodes {
          menuCategoryName
        }
      }
    }
  `)

  if (categoriesData) {
    const { allSanityMenuCategory: { nodes } } = categoriesData
    return (
      <Layout>
        <Container>
          {nodes.map(category => {
            const { menuCategoryName } = category
            return (
              <Fragment>
                <Category>{menuCategoryName}</Category>
                <p>Items</p>
              </Fragment>
            )
          })}
        </Container>
      </Layout>
    )
  }
}

export default Menu
