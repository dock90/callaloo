import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
// components
import Layout from '../components/layout'
import MenuItems from '../components/menuItems'

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
    query GET_MENU_CATEGORIES_QUERY {
      allSanityMenuCategory (sort : {
        fields: _updatedAt
        order: DESC
      }){
        nodes {
          _id
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
            console.log(category)
            const { _id, menuCategoryName } = category
            return (
              <Fragment key={_id} >
                <Category>{menuCategoryName}</Category>
                <MenuItems category={menuCategoryName} />
              </Fragment>
            )
          })}
        </Container>
      </Layout>
    )
  }
}

export default Menu
