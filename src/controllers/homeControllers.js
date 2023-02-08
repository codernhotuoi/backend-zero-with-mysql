const connection = require("../config/database")

const getHome = (req, res) => {
    //process data
    let user = []
    connection.query("SELECT * FROM Users", function (err, results, fields) {
        user = results
        console.log(results) // results contains rows returned by server
        res.send(JSON.stringify(user))
    })
}

const getStaticFile = (req, res) => {
    // res.send("<h1>Hello Manhhong!</h1>")
    res.render("sample.ejs")
}
module.exports = {
    getHome,
    getStaticFile,
}
