app.controller('questionsController',function(questionsFactory,$routeParams){
	var self=this;
	self.addQuestion=function(){
		self.errors=[];
		if(!self.newQ || !self.newQ.question){
			self.errors.push('please enter question');
		}
		else{
			questionsFactory.addQuestion(self.newQ);
		}
		
	}
	self.cancel=function(){
		questionsFactory.cancel();
	}
	questionsFactory.getQuestions(function(data){
		self.qList=data;
	})
	if($routeParams.qId){
		questionsFactory.answerQuestion($routeParams.qId,function(data){
			self.ansQuestion=data;
		})
	}
	if($routeParams.id){
		questionsFactory.showQuestion($routeParams.id,function(data){
			self.showQuestion=data;
		})
	}
})