$(document).ready(function () {
$('#app').vide({
  mp4: 'video/video.mp4',
  webm: "video/video.webm",
  ogv: "video/video.ogv",
  poster: 'img/cover-image.jpg'

});
$("#form-email").css("display","block");
$(".close").click(function(){
$("#form-email").fadeOut(1000);
});
});

