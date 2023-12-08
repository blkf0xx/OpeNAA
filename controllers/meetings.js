const Meeting = require('../models/meeting')
const User = require('../models/user')

module.exports = {
    index,
    show,
    new: newMeeting,
    create,
    edit,
    update,
    delete:deleteMtg
}

async function index(req, res) {
    const meetings = await Meeting.find({})
    res.render('meetings/index', { title: 'All Meetings', meetings} )
}

async function show(req, res) {
    const meetings = await Meeting.findById(req.params.id)
    res.render('meetings/show', { title: 'Meeting Info', meetings, currentUser: req.user } ) 
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

async function edit(req, res) {
    const meeting = await Meeting.findById(req.params.id)
    res.render('meetings/edit', { title: 'Update Meeting', meeting} )
}

async function update(req, res) {
    try {
        const updatedMtg = await Meeting.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new:true }
        )
        return res.redirect(`/meetings/${updatedMtg._id}`)
    } catch(err) {
        console.log(err)
        res.redirect('/meetings')
    }
}

async function deleteMtg(req, res) {
    try {
        const deletedMeeting = await Meeting.findOneAndDelete( { _id: req.params.id } )
        if (!deletedMeeting) {
            console.log('Meeting not found')
            return res.redirect('/meetings')
        }
        res.redirect('/meetings')
    } catch(err) {
        console.log(err)
        res.redirect('/meetings')
    }
}