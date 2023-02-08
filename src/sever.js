const express = require("express")
const path = require("path")
require("dotenv").config()
const configViewEngine = require("./config/viewEngine")
const Routers = require("./routes/web")
const connection = require("./config/database")
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

// config template view engine and file static
configViewEngine(app)

// khai báo routes
app.use("/", Routers)

// test connection

// simple query
connection.query("SELECT * FROM Users", function (err, results, fields) {
    console.log(results) // results contains rows returned by server
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
