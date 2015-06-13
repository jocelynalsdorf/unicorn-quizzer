Quiz.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: '/:question_id'}, function(){
    this.resource('new-answer');
    this.resource('answer', {path: '/:answer_id'})
  });
  this.resource('new-question');
  // this.resource('answer', {path: '/:question_id/answer/:answer_id'});

});
