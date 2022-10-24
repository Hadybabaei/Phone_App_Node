const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const messagesSchema = mongoose.Schema({
    contact:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Contacts'
    },
    maintext:String,
})
messagesSchema.plugin(timestamp)

exports.Messages = mongoose.model('Messages',messagesSchema)