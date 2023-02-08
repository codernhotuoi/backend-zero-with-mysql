const express = require("express")
const router = express.Router()
const { getStaticFile, getHome } = require("../controllers/homeControllers")
router.get("/", getHome)

router.get("/test", getStaticFile)
module.exports = router
