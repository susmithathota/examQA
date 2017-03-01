var mongoose=require('mongoose');
var Schema= mongoose.Schema;
var UserSchema= new Schema({
	name:{type:String},
	answers:[{type:Schema.Types.ObjectId,ref:'Answer'}]
})
var User=mongoose.model('User',UserSchema);