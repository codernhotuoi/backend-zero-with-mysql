const express = require("express")
const router = express.Router()
const {
    getStaticFile,
    getHome,
    postCreateUsers,
    getCreateUsers,
    getUpdateUsers,
} = require("../controllers/homeControllers")
router.get("/", getHome)
router.get("/test", getStaticFile)
router.get("/create", getCreateUsers)
router.get("/update/:id", getUpdateUsers)
router.post("/create-user", postCreateUsers)
module.exports = router
