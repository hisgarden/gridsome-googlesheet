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
        sheetId: "1K93kOfQSgRlzk8WQGr9D1MMI2w0Fs2E1yZpKffMIuG4", //'GOOGLE_SHEET_ID', 
        apiKey: "AIzaSyDlt3rs9wo4clM7yrbkqx_azo0JMibvazk", //'GOOGLE_API_KEY',
        route: "/:id", //optional, omit if not using routes
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      },
    },
  ]
}
