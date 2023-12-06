const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
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
  organization: String,
  weekday: String,
  time: Number,
  length: String,
  description: String,
  format: String,
  link: String,
  mtgId: Number,
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