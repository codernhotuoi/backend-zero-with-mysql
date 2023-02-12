const express = require("express")
const path = require("path")
require("dotenv").config()
const configViewEngine = require("./config/viewEngine")
const Routers = require("./routes/web")
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME
const connection = require("./config/database")
const Kitten = require("./models/kittens")
// config req.body
app.use(express.json()) // Used to parse JSON bodies
app.use(express.urlencoded()) //Parse URL-encoded bodies

// config template view engine and file static
configViewEngine(app)
// test connection
const cat = new Kitten({ name: "ManhHongDev " })
cat.save()
// khai báo routes
app.use("/", Routers)
;(async () => {
    try {
        await connection()
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log("Backend sever error", error)
    }
})()
