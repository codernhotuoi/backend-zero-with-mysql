const getHome = (req, res) => {
    res.send("<h1>Hello World! with NMH with NODEMON</h1>")
}
const getStaticFile = (req, res) => {
    // res.send("<h1>Hello Manhhong!</h1>")
    res.render("sample.ejs")
}
module.exports = {
    getHome,
    getStaticFile,
}
