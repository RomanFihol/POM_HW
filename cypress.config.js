const { defineConfig } = require("cypress");
const fs = require('fs');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.setupNodeEvents
      on("task", {
        log(message) {
          console.log(message)
          return null
        },
        hello({ name, age }) {
          console.log(`Good morning ${name}, you are ${age} old`)
          return null;
        },
        openFileIfExist(FilePath) {
          if (fs.existsSync(FilePath)) {
            return fs.readFileSync(FilePath, 'utf-8')
          }
          return null;
        },
        checkCountOfFilesInFolder(FolderPath) {
          return new Promise((resolve, reject) => {
            fs.readdir(FolderPath, (err, files) => {
              if (err) {
                return reject(err);
              }
              return resolve(files.length)
            })
          })
        }
      })
    },
    specPattern: 'cypress/e2e/*.js'
  },
});


