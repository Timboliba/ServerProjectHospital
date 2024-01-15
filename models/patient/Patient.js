const mongoose=require('mongoose')

const PatientSchema =mongoose.Schema ({
  firstname:{type:String,required:true},
  lastname:{type:String,required:true},
  email:{type:String,required:true},  
  password:{type:String,required:true},
  country:{type:String,require:true},
  phone: { type: String, required: true },
  pic:{type:String,require:false},
  age:{type:Number,required:true},
  sexe:{type:String,required:true},
  createdAt:{type:Date,require:false},
  updatedAt:{type:Date,require:false}
})
module.exports=mongoose.model('Patient',PatientSchema)