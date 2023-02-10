const connection = require("../config/database")
const getAllUsers = async () => {
    let [results, fields] = await connection.execute("select * from Users")
    return results
}
const getUserById = async (userId) => {
    const [rows, fields] = await connection.execute(`SELECT * FROM Users WHERE id = ?;`, [userId])
    const userArr = rows && rows.length > 0 ? rows[0] : {}
    return userArr
}
module.exports = { getAllUsers, getUserById }
