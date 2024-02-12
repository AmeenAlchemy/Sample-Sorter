const { defineConfig } = require("cypress")
const mysql = require("mysql")

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  env: {
    jupiterUiUrl: "https://jove.uat.alchemyglobalsolutions.com",
  },
  e2e: {
    baseUrl: "https://orders.uat.alchemyglobalsolutions.com",
    setupNodeEvents(on, config) {
      on("task", {
        connectToDB: dbParams => {
          const connection = mysql.createConnection(dbParams.config)
          connection.connect()

          return new Promise((resolve, reject) => {
            connection.query(dbParams.query, (error, results) => {
              if (error) {
                reject(error)
              } else {
                connection.end()
                return resolve(results)
              }
            })
          })
        },
      })
    },
  },
})
