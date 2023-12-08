const Meeting = require('../models/meeting')

module.exports = {
    create,
    delete:deleteComment
}

async function create(req, res) {
    try {
        const meeting = await Meeting.findById(req.params.id)
        
        // anonymize last name
        const splitName = req.user.name.split(' ')
        const firstName = splitName[0]
        const lastInitial = splitName.length > 1 ? splitName.pop().charAt(0).toUpperCase() : ''
        const displayName = lastInitial ? `${firstName} ${lastInitial}.` : firstName

        meeting.comments.push({
            user: req.user._id,
            content: req.body.content,
            name: displayName,
            avatar: req.user.avatar
        })

        await meeting.save()
        res.redirect(`/meetings/${meeting._id}`)
    } catch (err) {
        console.log(err)
        res.redirect(`/meetings/${meeting._id}`)
    }
}

async function deleteComment(req, res) {
    const meeting = await Meeting.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id })
    if (!meeting) return res.redirect(`/meetings/${meeting._id}`)
    meeting.comments.remove(req.params.id)
    await meeting.save()
    res.redirect(`/meetings/${meeting._id}`)
}

