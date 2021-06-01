// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Quarry Lakes Demonstration Garden',
  siteDescription: 'Outstanding Plants of Alameda County',
  plugins: [
    {
      use: 'gridsome-source-google-sheets-v2',
      options: {
        //sheetId: process.env.GOOGLE_SHEET_ID, //'GOOGLE_SHEET_ID',
        apiKey: process.env.GOOGLE_API_KEY, //'GOOGLE_API_KEY',
        spreadsheets: [
          {
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            sheets: [
              {
                sheetName: 'QL_Plants', // Example: "Sheet1"
                collectionName: 'googleSheet', // Example: "Projects" (Must be unique)
              },
              //{
              //  sheetName: 'Natives', // Example: "Sheet2"
              //  collectionName: "googleSheet", // Example: "Users" (Must be Unique)
              //},
            ],
          },
        ],
      },
    },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        typeName: 'googleSheet',
        sourceField: 'Image_URL',
        targetField: 'imageDownloaded',
        targetPath: 'src/assets/img',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Article',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
  ],
  templates: {
    googleSheet: [
      {
        path: '/:id',
        component: './src/templates/googleSheet.vue',
      },
    ],
  },
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
}
