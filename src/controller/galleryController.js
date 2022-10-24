const upload = require('../helper/upload')
const { Gallery } = require('../models/Gallery')

module.exports = new (class galleryController{

    async createPhoto(req,res){
        try{
            upload(req,res,(err)=>{
                if (err){
                    console.log(err)
                }else{
                    const gallery = Gallery.create({
                        desc:req.body.desc,
                        img:{
                            data:req.file.filename,
                            contentType:req.file.mimetype
                        },
                        imgsize:req.file.size,
                        location:req.file.path
                    })
                    res.status(201).json({
                        message:'New Photo Created',
                    })
                }
            })
        }catch(err){
            console.log(err)
        }
    }

    async getAllPhotos(req,res){
        try{
            const data = await Gallery.find();
            res.json({
                data,
                success:true,
            })
        }catch(err){
            console.log(err)
        }
    }
})()