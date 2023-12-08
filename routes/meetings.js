var express = require('express');
var router = express.Router();
const meetingsCtrl = require('../controllers/meetings')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', meetingsCtrl.index)
router.get('/new', ensureLoggedIn, meetingsCtrl.new)
router.get('/:id', meetingsCtrl.show)
router.post('/', ensureLoggedIn, meetingsCtrl.create)
router.get('/:id/edit', meetingsCtrl.edit)
router.put('/:id', meetingsCtrl.update)
router.delete('/:id', meetingsCtrl.delete)

module.exports = router;
