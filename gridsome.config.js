// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'OPAC',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: process.env.GOOGLE_SHEET_ID, //'GOOGLE_SHEET_ID', 
        apiKey: process.env.GOOGLE_API_KEY, //'GOOGLE_API_KEY',
        //route: "/:id", //optional, omit if not using routes
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      },
    },
  ]
}
