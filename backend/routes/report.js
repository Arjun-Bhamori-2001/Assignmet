const express = require(`express`)
const router = express.Router()

const {createReport,getReport} = require(`../controllers/reportController`)

router.route(`/report`).get(getReport)
router.route(`/report/new`).post(createReport)

module.exports = router
