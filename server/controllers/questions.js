var mongoose=require('mongoose');
var Question=mongoose.model('Question');

module.exports=(function(){
	return{
		addQuestion:function(req,res){
			var newQuestion= new Question(req.body);
			newQuestion.save(function(err){
				if(err) console.log(err)
				else{
					console.log('saved');
					res.json({status:true});
				}
			})
		},
		getQuestions:function(req,res){
			Question.find({},function(err,result){
				if(err) console.log(err)
				else{
					res.json(result);
				}
			})
		},
		showQuestion:function(req,res){
			Question.findOne({_id:req.params.id})
					.populate('answers')
					.exec(function(err,question){
						if(err) console.log(err)
						else{
							res.json(question);
						}
					})
		}
	}
})()