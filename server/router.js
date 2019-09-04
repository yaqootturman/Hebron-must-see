const express = require("express")
const router = express.Router()
const postLogin = require("./controllers/login")

router.route("/login").post(postLogin)
router.route("/places")

// router.post("/login", postLogin)

module.exports = router
