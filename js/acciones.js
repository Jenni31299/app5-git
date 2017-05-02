// JavaScript Document

$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.model);
		$('#disp table td').eq(7).text(device.model);
		$('#disp table td').eq(9).text(device.model);
		$('#disp table td').eq(11).text(device.model);
        document.addEventListener("pause",function(){
			escribehistoria ('la app de pausó');
		},false);//pause
		document.addEventListener("resume",function(){
		escribehistoria ('la app de reinició');	
		},false);//resume
		document.addEventListener("online",function(){
		escribehistoria ('la app se conecto a la red');	
		},false);//se conecto
		document.addEventListener("offline",function(){
		escribehistoria ('la app se desconecto de la red');	
		},false);//se desconecto
		
	},false);//ready device
	
});//document

function escribehistoria(accion){
	$('#Historia').append('<li>'+accion+'</li>');
}
