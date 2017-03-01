app.controller('answersController',function(answersFactory){
	var self=this;
	self.addAnswer=function(qId,uId){
		self.errors=[];
		if(!self.newA || !self.newA.answer){
			self.errors.push('plaese enter answer');
		}
		else{
			self.newA.question=qId;
			self.newA.user=uId;
			answersFactory.addAnswer(self.newA);
		}
	}
	self.cancel=function(){
		answersFactory.cancel();
	}
	self.likeAnswer=function(id){
		answersFactory.likeAnswer(id);
	}
})