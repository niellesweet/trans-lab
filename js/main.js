/* Holiii acá va tu código también */
/*VALIDACION CORREO Y CLAVE*/
$(document).ready(function(){
	$(".boton-inicio").click(function(){
		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,4})$/.test($("#input-email").val())) ){
   			$("#input-email").parent().append("<span>Ingrese un correo valido</span>");
  		}

  		if(($("#input-contraseña").val() == "pass") || ($("#input-contraseña").val() == 123456) || ($("#input-contraseña").val() == 098765) || (($("#input-contraseña").val()).length < 5)){
  			$("#input-contraseña").parent().append("<span>Ingrese contraseña valida</span>");
  		}
  });
});
/*FIN VALIDACIONES*/






/*INICIO PREGUNTAS FRECUENTES*/
$(document).ready(function(){
	
	$('ul.tabs li a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li a').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
/*FIN PREGUNTAS FRECUENTES*/
