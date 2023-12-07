var express = require('express');
var router = express.Router();
const meetingsCtrl = require('../controllers/meetings')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', meetingsCtrl.index)
router.get('/new', ensureLoggedIn, meetingsCtrl.new)
router.get('/:id', meetingsCtrl.show)
router.post('/', ensureLoggedIn, meetingsCtrl.create)

module.exports = router;
