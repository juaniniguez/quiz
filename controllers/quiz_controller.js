//GET //quizes/question
export.question = function(req, res){
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
}

//GET /quizes/answer
export.question = function(req, res){
	if(req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Correcta'});
	}else{
		res.render('quizes/answer', {respuesta: 'Incorrecta'});
	}
	
}