const Meeting = require('../models/meeting')

module.exports = {
    create
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

