const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const contactsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:String,
    number:String,
    messages:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Messages'
    },
    avatar:{
        data:Buffer,contentType:String
    }
})
contactsSchema.plugin(timestamp);

exports.Contacts = mongoose.model('Contacts',contactsSchema)