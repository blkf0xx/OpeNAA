const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userAvatar: String
  }, {
    timestamps: true
  })

const meetingSchema = new Schema({
  userMtg: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mtgName: String,
  organization: { type: String, enum: ['AA', 'NA'] },
  weekday: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
  time: String,
  length: Number,
  description: String,
  format: { type: String, enum: ['In Person', 'Online Only', 'Hybrid'] },
  link: { type: String, trim: true},
  mtgId: String,
  mtgPasscode: String,
  address: String,
  // userAttends: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Attending'
  // },
  comments: [commentSchema]
}, { timestamps: true
})

 // Trim leading and trailing whitespaces
meetingSchema.pre('save', (next) => {
  if (this.link) {
    this.link = this.link.trim()
  }
  next()
})

module.exports = mongoose.model('meeting', meetingSchema)

