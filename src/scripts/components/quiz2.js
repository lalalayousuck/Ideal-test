var $ = require('jquery');
var data = require('../data/quiz');

Component.define('quiz', {

  events: {
    'click on %start': 'obey',
    'click on %agree': 'start',
    'click on %answer': 'pickAnswer',
    'click on %next': 'next'
  },

  init: function() {
    this.quiz = data.quiz;
    this.questions = data.questions;
    this.result = data.results;
    this.agreement = data.agreement;

    this.$block.html(Templates.quiz(this.quiz));
  },

  obey: function() {
    this.$block.html(Templates.agreement(this.agreement));
  },

  start: function() {
    this.quizResult = 0;
    this.currentQuestion = 0;
    this.score = 0;

    this.setExtraInfo();
    this.$block.html(Templates.question(this.questions[this.currentQuestion]));
  },

  setExtraInfo: function() {
    this.questions[this.currentQuestion].number = this.currentQuestion + 1;
    this.questions[this.currentQuestion].length = 10;
  },

  pickAnswer: function(e, $el) {

    this.currentAnswer = $el.index();

    this.$block.find('.js-quizAnswer').removeClass('is-picked');
    this.$block.find('.js-quizAnswer:eq(' + this.currentAnswer + ')').addClass('is-picked');
    this.$block.find('.js-quizNext').removeClass('is-disabled');
  },

  next: function() {
    this.quizResult += this.questions[this.currentQuestion].variants[this.currentAnswer].result;
    
    if (++this.currentQuestion == this.questions.length) {

      for (var i = 0; i < this.result.length; i++) {
        if (this.quizResult > this.result[i].min && this.quizResult < this.result[i].max) {
          this.$block.html(Templates.result(this.result[i]));
          Component.vitalize();
          ga('send', 'event', 'quiz', 'finished', 'finished');
        }
      }
    } else {
      this.setExtraInfo();
      this.$block.html(Templates.question(this.questions[this.currentQuestion]));
    }
  }
});