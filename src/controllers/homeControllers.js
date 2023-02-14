const connection = require("../config/database")
const { getAllUsers, getUserById, creatUsers } = require("../services/CRUDServices")
const User = require("../models/user")
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
    const { email, name, city } = req.body
    await User.create({ email, name, city })
    res.redirect("/")
}
const postUpdateUsers = async (req, res) => {
    const { email, name, city, id } = req.body
    await User.updateOne({ id: id }, { email: email, name: name, city: city })
    res.redirect("/")
}
const postDeleteUsers = async (req, res) => {
    const { id } = req.body
    await User.deleteOne({ id: id })
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
