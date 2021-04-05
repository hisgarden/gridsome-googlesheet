// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: "1K93kOfQSgRlzk8WQGr9D1MMI2w0Fs2E1yZpKffMIuG4", //'GOOGLE_SHEET_ID', 
        apiKey: "AIzaSyAwj4oqgFma6qv_PG2d3wgUYu8na7Iau0Q", //'GOOGLE_API_KEY',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      },
    },
  ]
}
