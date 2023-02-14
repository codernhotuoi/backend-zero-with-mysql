const connection = require("../config/database")
const User = require("../models/user")
const getAllUsers = async () => {
    let results = await User.find({})
    return results
}
const getUserById = async (userId) => {
    const userArr = await User.findById(userId).exec()
    return userArr
}
const creatUsers = async (email, name, city) => {
    const [rows, fields] = await connection.execute(
        `INSERT INTO Users(email, name, city)
    VALUES (?, ?, ?);`,
        [email, name, city],
    )
}
module.exports = { getAllUsers, getUserById, creatUsers }
