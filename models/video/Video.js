const mongoose=require('mongoose')

const VideoSchema=mongoose.Schema({
    type:{type:String,required:true},
    tarif:{type:String,required:true},
    date:{type:String,required:true},
    heure:{type:String,required:true},
})

module.exports=mongoose.model('Video',VideoSchema)