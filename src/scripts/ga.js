(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga')

ga('create', 'UA-85326915-1', 'auto');
ga('send', 'pageview');

setTimeout(function() {
  ga('send', 'event', 'timer', 'read');
}, 30000);

$(document).on('click', '.js-quizStart', function() {
  ga('send', 'event', 'quiz', 'start', 'start');
})

$(document).on('click', '.js-quizNext', function() {
  ga('send', 'event', 'quiz', 'next', 'next');
})

$(document).on('click', '.share-btn__fb', function() {
  ga('send', 'event', 'quiz', 'fb_share', 'fb_share');
})

$(document).on('click', '.share-btn__vk', function() {
  ga('send', 'event', 'quiz', 'vk_share', 'vk_share');
})

$(document).on('click', '.share-btn__ok', function() {
  ga('send', 'event', 'quiz', 'ok_share', 'ok_share');
})

$(document).on('click', '.p-hero_social__web', function() {
  ga('send', 'event', 'quiz', 'go_to_web', 'go_to_web');
})

$(document).on('click', '.p-hero_social__vk', function() {
  ga('send', 'event', 'quiz', 'go_to_vk', 'go_to_vk');
})

$(document).on('click', '.p-hero_social__fb', function() {
  ga('send', 'event', 'quiz', 'go_to_fb', 'go_to_fb');
})

$(document).on('click', '.p-hero_social__inst', function() {
  ga('send', 'event', 'quiz', 'go_to_inst', 'go_to_inst');
})