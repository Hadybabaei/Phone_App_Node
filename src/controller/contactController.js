const { Contacts } = require("../models/Contacts")

module.exports = new (class contactController {
    
    async createContact(req,res){
        const valCon = await Contacts.findOne({name:req.body.name});
        if (!valCon){
            const contact = await Contacts.create({
                name:req.body.name,
                lastname:req.body.lastname,
                number:req.body.number
            })      
            res.status(201).json({
                message:`contact ${req.body.name} created`
            })
        }else{
            res.status(400).json({
                data:null,
                message:'Contact Already Exists'
            })
        }
    }

    async getContacts(req,res){
        if (req.params.number){
            let data = await Contacts.find({number:{$regex:req.params.number}})
            if (data.length > 0 ){
                res.json({
                    data,
                    message:'ok'
                })
            }else{
                res.status(404).json({
                    data:null,
                    message:'Not Found',
                })
            }
        }else{
            const data = await Contacts.find();
            res.status(200).json({
                message:'ok',
                data
            })
        }   
    }

    async updateContacts(req,res){
        try {
            const data = await Contacts.findByIdAndUpdate(req.params.id, req.body);
            await data.save();
            res.json({
                message:"Contact Updated Successfuly",
                data:data.name
            });
          } catch (error) {
            res.status(400).json({
                data:null,
                message:"Bad Request"
            })
          }
    }
    
    async deleteContacts(req,res){
        try {
            const data = await Contacts.findByIdAndDelete(req.params.id);
            if (!data) res.status(404).send("No item found");
            res.status(200).send('Contact Deleted Successfuly');
        } catch (error) {
            res.status(400).json({
                message:"Bad Request",
                data:null
            });
        }    
    }
})()



