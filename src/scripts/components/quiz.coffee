$ = require('jquery')
data = require('../data/quiz')
docCookies = require('../lib/doc-cookies.js')



Component.define 'quiz',
  events:
    'click on %start': 'start'
    'click on %next': 'nextQuestion'
    'click on %checkbox': 'pickAnswer'

  init: ->
    @quiz = data.quiz
    @questions = data.questions
    @render()

  render: ->
    @$block.html(Templates.quiz(@quiz))
    setTimeout(@endAnimate.bind(@), 100)

  goTo: (e, $el) ->
    return if @questionIndex <= $el.index()
    @questionIndex = $el.index()
    @renderQuestion(@question = @questions[@questionIndex])

  start: ->
    @answersStat = 0
    @questionIndex = @score = 0
    @renderQuestion(@question = @questions[0])

  nextQuestion: ->
    @getAnswerScore()
    if ++@questionIndex == @questions.length
      docCookies.setItem('resultQuizKey', @getResultKey())
      page('/result')
    else
      @renderQuestion(@question = @questions[@questionIndex])

  pickAnswer: ->
    @getAnswerScore
    @$('.checkbox').removeClass('is-picked')
    $(event.target).addClass('is-picked')
    $('.js-quizNext').removeClass('is-disabled')

  getAnswerScore: ->
    $el = @$('is-picked')
    variant = $el.data.questions.variants.result
    @answersStat += variant

  renderQuestion: (question) ->
    @animate(=>
      @$('%view').html(Templates.question(question))
    )


  animate: (callback) ->
    @startAnimate()

    setTimeout((=>
      callback()
      @endAnimate()
    ), 600)

  startAnimate: ->
    $('#page').removeClass('is-ready').addClass('is-hidding')

  endAnimate: ->
    $('#page').removeClass('is-hidding')
    setTimeout((->$('#page').addClass('is-ready')), 1)

  getResultKey: ->
    Object.keys(@answersStat).sort((a, b) => @answersStat[a] < @answersStat[b])[0]