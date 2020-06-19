import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
// components
import Layout from '../components/layout'
import MenuCategories from '../components/menuCategories'

const Menu = () => {
  // fetch menuItems data
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

  return (
    <Layout>
      <MenuCategories menuItemsData={menuItemsData} />
    </Layout>
  )
}

export default Menu
