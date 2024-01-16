
const mongoose=require('mongoose')

const ConsultationSchema=mongoose.Schema({
    id_patient:{type:String,required:false},
    id_docteur:{type:String,required:false},
    date_consultation:{type:Date,required:false},
    heure_consultation:{type:String,required:false},
    etatConsultation:{type:String,require:false}
})

module.exports=mongoose.model('Consultation',ConsultationSchema)