import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

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
    console.log('Menu Items Data: ', menuItemsData)
    const { allSanityMenuItem: { nodes } } = menuItemsData
    return (
      <div>
        {nodes.map(menuItem => {
          console.log('Menu Item: ', menuItem)
          const {
            menuItemName,
            menuItemPrice,
            menuItemCategory: {
              menuCategoryName
            },
            _rawMenuItemDescription
          } = menuItem

          if (menuCategoryName === category) {
            return (
              <p>{menuItemName}</p>
            )
          }

        })}
      </div>
    )
  }
}

export default MenuItems
