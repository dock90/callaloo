import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4rem;
  margin: 0 2rem 2rem 2rem;
`

const ItemContainer = styled.div`
  border-bottom: 1px solid #31200f;
`

const MenuItems = ({ category }) => {
  const menuItemsData = useStaticQuery(graphql`
    query GET_MENU_ITEMS_QUERY {
      allSanityMenuItem (
        sort : {
          fields: _updatedAt
          order: ASC
        }
      ) {
        nodes {
          _id
          menuItemName
          menuItemPrice
          menuItemCategory {
            menuCategoryName
          }
          _rawMenuItemDescription
        }
      }
    }
  `)

  if (menuItemsData) {
    const { allSanityMenuItem: { nodes } } = menuItemsData
    return (
      <Container>
        {nodes.map(menuItem => {
          const {
            _id,
            menuItemName,
            menuItemPrice,
            menuItemCategory: {
              menuCategoryName
            },
            _rawMenuItemDescription
          } = menuItem

          if (menuCategoryName === category) {
            return (
              <ItemContainer key={_id}>
                <p><b>{menuItemName}</b> | {menuItemPrice}</p>
                <BlockContent blocks={_rawMenuItemDescription} />
              </ItemContainer>
            )
          }
          return null;
        })}
      </Container>
    )
  }
}

export default MenuItems
