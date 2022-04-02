module.exports = {
  siteMetadata: {
    siteUrl: `https://www.boomevents.hr`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-google-gapi`,
      options: {
        apiKey: `AIzaSyD-2Ub6jW5X_PHHJDUKFWwvsVCo4A4SQck`,
        clientId: `964179139702-lbue5mtmqvd2pe3r8hr5vcj7erlg0kgf.apps.googleusercontent.com`,
        discoveryURLs:[],
        scopes: []
      }
    }
  ],
};
