var session=require('../controllers/session.js')
var questions=require('../controllers/questions.js')
var answers=require('../controllers/answers.js')

module.exports=function(app){
	app.post('/login',function(req,res){
		session.login(req,res);
	})
	app.get('/checkUser',function(req,res){
		session.checkUser(req,res);
	})
	app.get('/logout',function(req,res){
		session.logout(req,res);
	})
	// ------------question-------------
	app.post('/addQuestion',function(req,res){
		questions.addQuestion(req,res);
	})
	app.get('/getQuestions',function(req,res){
		questions.getQuestions(req,res);
	})
	app.get('/answer/:id',function(req,res){
		questions.showQuestion(req,res);
	})
	app.get('/show/:id',function(req,res){
		questions.showQuestion(req,res);
	})
	// ------------Answer--------------
	app.post('/addAnswer',function(req,res){
		answers.addAnswer(req,res)
	})
	app.post('/likeAnswer/:id',function(req,res){
		answers.likeAnswer(req,res);
	})
}