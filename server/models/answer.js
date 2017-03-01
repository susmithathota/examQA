var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var AnswerSchema=new Schema({
	answer:{type:String},
	details:{type:String},
	likes:{type:Number,default:0},
	question:{type:Schema.Types.ObjectId,ref:'Question'},
	user:{type:Schema.Types.ObjectId,ref:'User'}
});
var Answer=mongoose.model('Answer',AnswerSchema);