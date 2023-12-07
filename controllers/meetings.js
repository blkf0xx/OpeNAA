const Meeting = require('../models/meeting')

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
    const meeting = new Meeting(req.body)

    try {
        await meeting.save()
        res.redirect(`/meetings/${meeting._id}`)
    } catch(err) {
        console.log(err.message)
        res.redirect('/meetings/new')
    }
}