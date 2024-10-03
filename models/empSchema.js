const mongoose=require('mongoose')
const empSchema = mongoose.Schema({
    empName:String,
    empDesgn:String,
    empLocation:String,
    empSalary:Number
});
const empData=mongoose.model('empdb',empSchema)
module.exports=empData