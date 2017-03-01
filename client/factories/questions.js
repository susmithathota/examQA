app.factory('questionsFactory',function($location,$http){
	var factory={};
	factory.addQuestion=function(question){
		$http.post('/addQuestion',question).then(function(output){
			$location.url('/dash');
		})
	}
	factory.cancel=function(){
		$location.url('/dash');
	}
	factory.getQuestions=function(cb){
		$http.get('/getQuestions').then(function(output){
			cb(output.data);
		})
	}
	factory.answerQuestion=function(qId,cb){
		$http.get('/answer/'+qId).then(function(output){
			cb(output.data);
		})
	}
	factory.showQuestion=function(id,cb){
		$http.get('/show/'+id).then(function(output){
			cb(output.data);
		})
	}
	return factory;
})