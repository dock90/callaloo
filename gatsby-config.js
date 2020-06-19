require("dotenv").config({
  path: './.env',
})

module.exports = {
  siteMetadata: {
    title: "Callaloo Trinidadian Kitchen",
    description:
      "At Callaloo, our passion is to create delicious food through chef-driven creativity and authentic Trinidadian flavor. As a colonial-Caribbean island nation, Trinidad & Tobago's cuisine is a rich fusion of many traditions and cultures.",
    url: "https://callalootrinidadiankitchen.netlify.app"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: false,
        overlayDrafts: false
      },
    },
  ],
}
