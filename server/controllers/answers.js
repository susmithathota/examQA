var mongoose=require('mongoose');
var Answer=mongoose.model('Answer');
var Question=mongoose.model('Question');
var User=mongoose.model('User');

module.exports=(function(){
	return{
		addAnswer:function(req,res){
			var newAnswer=new Answer(req.body);
			Question.findOne({_id:req.body.question},function(err,question){
				if(err) console.log(err)
				else{
					newAnswer.question=question._id;
					newAnswer.save(function(err){
						if(err) console.log(err)
						else{
							question.answers.push(newAnswer._id);
							question.save(function(err){
								if(err) console.log(err)
								else{
									console.log('saved');
								}
							})
						}
					})
				}
			})
			User.findOne({_id:req.body.user},function(err,user){
				if(err) console.log(err)
				else{
					newAnswer.user=user._id;
					newAnswer.save(function(err){
						if(err) console.log(err)
						else{
							user.answers.push(newAnswer._id);
							user.save(function(err){
								if(err) console.log(err)
								else{
									res.json({status:true});
								}
							})
						}
					})
				}
			})
		},
		likeAnswer:function(req,res){
			Answer.findOne({_id:req.params.id},function(err,answer){
				if(err) console.log(err)
				else{
					answer.likes += 1;
					answer.save(function(err){
						if(err) console.log(err)
						else{
							res.json(answer);
						}
					})
				}
			})
		}
	}
})()