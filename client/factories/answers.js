app.factory('answersFactory',function($http,$location,$route){
	var factory={};
	factory.addAnswer=function(answer){
		$http.post('/addAnswer',answer).then(function(output){
			if(output.data){
				$location.url('/dash');
			}
		})
	}
	factory.cancel=function(){
		$location.url('/dash')
	}
	factory.likeAnswer=function(id){
		$http.post('/likeAnswer/'+id).then(function(output){
			$location.url('/dash');
		})
	}
	return factory;
})