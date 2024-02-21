const mongoose=require('mongoose')

const PlanificationScheam=mongoose.Schema({
    jours:{type:String,require:true},
    id_docteur:{type:String,require:true},
    datePlanification:{type:String,require:true},
    horaire:{type:String,require:true},
    modeConsultation:{type:String,require:true},
})

module.exports=mongoose.model('Planification',PlanificationScheam)