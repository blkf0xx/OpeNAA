const express = require('express')
const router = express.Router()
const resourcesController = require('../controllers/resources')

/* GET resources page */
router.get('/resources', resourcesController.getResourcesPage)

module.exports = router