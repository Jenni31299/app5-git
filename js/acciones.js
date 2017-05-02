// JavaScript Document

$ (document).ready (function (e){
	document.addEventListener("deviceready", function(){
		
		$('#bepp').tap(function(){
			navigator.notificacion.beep(2);
		});//tap beep
		
		$('#vibrar').tap(function(){
			navigator.notificacion.beep(1000);
		});//tap vibrar
		
	},false); //deviceready
}); //ready
		


