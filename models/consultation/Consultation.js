
const mongoose=require('mongoose')

const ConsultationSchema=mongoose.Schema({
    id_patient:{type:String,required:true},
    id_docteur:{type:String,required:true},
    date_consultation:{type:Date,required:true},
    heure_consultation:{type:String,required:true},
    etatConsultation:{type:String,default:"En attente de confirmation"}
})

module.exports=mongoose.model('Consultation',ConsultationSchema)