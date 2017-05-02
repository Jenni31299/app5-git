// JavaScript Document

$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
		$('#bepp').tap(function(){
		navigator.notification.bepp(2);
	});//tap beep
		$('#vibrar').tap(function(){
		navigator.notification.vibrar(1000);
	});//tap vibrar
		
		},false);//deviceready
});//ready


