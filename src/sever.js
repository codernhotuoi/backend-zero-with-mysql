const express = require("express")
const path = require("path")
require("dotenv").config()
const configViewEngine = require("./config/viewEngine")
const Routers = require("./routes/web")
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

// config template view engine and file static
configViewEngine(app)

// khai báo routes
app.use("/", Routers)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
