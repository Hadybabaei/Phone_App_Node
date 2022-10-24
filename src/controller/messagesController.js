const { Contacts } = require("../models/Contacts");
const { Messages } = require("../models/Messages")

module.exports = new ( class messageController {

    async getMessages(req,res){
        const data = await Messages.find().populate('contact');
        if (data.length == 0){
            res.json({
                data:null,
                message:'No Messages yet'
            })
        }else{
            res.json({
                data,
                Success:true,
            })
        }
    }
})()