const Meeting = require('../models/meeting')

module.exports = {
    index,
    new: newMeeting
}

async function index(req, res) {
    const meetings = await Meeting.find({})
    res.render('meetings/index', { title: 'All Meetings', meetings} )
}

async function newMeeting(req, res) {
    res.render('meetings/new', { title: 'Add Meetings', errorMsg: '' })
}