const connection = require("../config/database")
const { getAllUsers, getUserById } = require("../services/CRUDServices")
const getHome = async (req, res) => {
    const results = await getAllUsers()
    return res.render("home.ejs", { listUsers: results })
}

const postCreateUsers = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    const [rows, fields] = await connection.execute(
        `INSERT INTO Users(email, name, city)
    VALUES (?, ?, ?);`,
        [email, name, city],
    )
    res.send("created success completed !")
}

const getCreateUsers = (req, res) => {
    res.render("create.ejs")
}
const getUpdateUsers = async (req, res) => {
    const userId = req.params.id
    const userArr = await getUserById(userId)
    res.render("update.ejs", { userArr: userArr })
}
const getStaticFile = (req, res) => {
    // res.send("<h1>Hello Manhhong!</h1>")
    res.render("sample.ejs")
}
module.exports = {
    getHome,
    getStaticFile,
    postCreateUsers,
    getCreateUsers,
    getUpdateUsers,
}
