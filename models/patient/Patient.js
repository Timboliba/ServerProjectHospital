const mongoose=require('mongoose')

const PatientSchema =mongoose.Schema ({
  nom:{type:String,required:true},
  prenom:{type:String,required:true},
  age:{type:Number,required:true},
  sexe:{type:String,required:true},
  adresse:{type:String,require:true},
  tel: { type: String, required: true },
  email:{type:String,required:true},
  password:{type:String,required:true}
})
module.exports=mongoose.model('Patient',PatientSchema)