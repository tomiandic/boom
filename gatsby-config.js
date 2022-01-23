module.exports = {
    siteMetadata: {
        siteUrl: `https://www.boomevents.hr`,
    },
    plugins: [
        {
            resolve: `gatsby-source-instagram`,
            options: {
              username: `11629345558`,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
    ]
}