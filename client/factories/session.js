app.factory('sessionFactory',function($location,$http){
	var factory={};
	factory.login=function(user){
		$http.post('/login',user).then(function(output){
			if(output.data){
				$location.url('/dash');		
			}
		})
	}
	factory.checkUser=function(cb){
		$http.get('/checkUser').then(function(output){
			if(!output.data){
				$location.url('/login');
			}
			else{
				cb(output.data);
			}
		})
	}
	return factory;
})