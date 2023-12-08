const Meeting = require('../models/meeting')

module.exports = {
    create
}

async function create(req, res) {
    const meeting = await Meeting.findById(req.params.id)
    meeting.comments.push(req.body)
    try {
        await meeting.save();
        res.redirect(`/meetings/${meeting._id}`)
    } catch (err) {
        console.log(err);
        res.redirect(`/meetings/${meeting._id}`)
    }
}
