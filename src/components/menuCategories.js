import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
// components
import MenuItems from './menuItems'

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

const MenuCategories = ({ menuItemsData }) => {
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
      <Container>
        {
          nodes.map(category => {
            const { _id, menuCategoryName } = category
            return (
              <Fragment key={_id} >
                <Category>{menuCategoryName}</Category>
                <MenuItems
                  category={menuCategoryName}
                  menuItemsData={menuItemsData}
                />
              </Fragment>
            )
          })
        }
      </Container>
    )
  }
}

export default MenuCategories
