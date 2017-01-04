$(function(){
	obtenerDatos();
});

function obtenerDatos(){
	$.ajax({
		url:"js/datosEjer1.txt",

		type: "GET",

		dataType: "text",

		success: terminado,

		error: error,

		complete: complete
	});
}

function terminado(e){
	console.log("Datos Recibidos");
	$('#contenedor').text(e);
}

function error(xhr, status, strErr){
	console.log('Error al ejecutar, por favor revisar');
}

function complete(xhr, status){
	console.log('Completado Satisfactoriamente');
}
