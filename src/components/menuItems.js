import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4rem;
  margin: 0 1rem 2rem 1rem;
`

const ItemContainer = styled.div`
  border-bottom: 1px solid #31200f;
`

const MenuItems = ({ category, menuItemsData }) => {
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
  return null
}

export default MenuItems
