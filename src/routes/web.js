const express = require("express")
const router = express.Router()
const {
    getStaticFile,
    getHome,
    getCreateUsers,
    getUpdateUsers,
    postCreateUsers,
    postUpdateUsers,
    postDeleteUsers,
} = require("../controllers/homeControllers")
router.get("/", getHome)
router.get("/test", getStaticFile)
router.get("/create", getCreateUsers)
router.get("/update/:id", getUpdateUsers)
router.post("/create-user", postCreateUsers)
router.post("/update-user", postUpdateUsers)
router.post("/delete-user", postDeleteUsers)
module.exports = router
