require("dotenv").config({
  path: './.env',
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      },
    },
  ],
}
