const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const gallerySchema = mongoose.Schema({
    img: {data:Buffer,contentType:String},
    desc : {type:String,default:'image from Gallery'},
    imgsize:Number,
    location:String
})

gallerySchema.plugin(timestamp);

exports.Gallery = mongoose.model('Gallery',gallerySchema)