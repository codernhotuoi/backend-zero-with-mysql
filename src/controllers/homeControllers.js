const connection = require("../config/database")
const { getAllUsers, getUserById, creatUsers } = require("../services/CRUDServices")
const getHome = async (req, res) => {
    const results = await getAllUsers()
    return res.render("home.ejs", { listUsers: results })
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
    res.render("sample.ejs")
}
const postCreateUsers = async (req, res) => {
    // let email = req.body.email
    // let name = req.body.name
    // let city = req.body.city
    const { email, name, city } = req.body
    await creatUsers(email, name, city)
    res.redirect("/")
}
const postUpdateUsers = async (req, res) => {
    const { email, name, city, id } = req.body
    const [rows, fields] = await connection.execute(
        `   UPDATE Users
            SET email = ?, name = ?, city = ?
            WHERE id = ?`,
        [email, name, city, id],
    )
    res.redirect("/")
}
const postDeleteUsers = async (req, res) => {
    const { id } = req.body
    const [rows, fields] = await connection.execute(`DELETE FROM Users WHERE id = ?;`, [id])
    res.redirect("/")
}
module.exports = {
    getHome,
    getStaticFile,
    getCreateUsers,
    getUpdateUsers,
    postCreateUsers,
    postUpdateUsers,
    postDeleteUsers,
}
