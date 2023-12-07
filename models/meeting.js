const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  })


const meetingSchema = new Schema({
  userMtg: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  mtgName: String,
  organization: { type: String, enum: ['AA', 'NA'] },
  weekday: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
  time: String,
  length: Number,
  description: String,
  format: { type: String, enum: ['In Person', 'Online Only', 'Hybrid'] },
  link: String,
  mtgId: String,
  mtgPasscode: String,
  address: String,
  // userAttends: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Attending'
  // },
  comments: [commentSchema]
}, {timestamps: true
})

module.exports = mongoose.model('meeting', meetingSchema)