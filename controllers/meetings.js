const Meeting = require('../models/meeting')
const User = require('../models/user')

module.exports = {
    index,
    show,
    new: newMeeting,
    create
}

async function index(req, res) {
    const meetings = await Meeting.find({})
    res.render('meetings/index', { title: 'All Meetings', meetings} )
}

async function show(req, res) {
    const meetings = await Meeting.findById(req.params.id)
    res.render('meetings/show', { title: 'Meeting Info' , meetings} )
}

async function newMeeting(req, res) {
    res.render('meetings/new', { title: 'Add Meetings', errorMsg: '' })
}

async function create(req, res) {
    try {
        const meeting = await Meeting.create({
            ...req.body,
            userMtg: req.user
        });
        res.redirect(`/meetings/${meeting._id}`)
    } catch(err) {
        console.log(err.message)
        res.redirect('/meetings/new')
    }
}
