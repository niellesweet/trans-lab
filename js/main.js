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
/*VER SALDO NO FUNCIONA A TRAVES DE JQUERY :C
$(document).ready(function(){
	$('#boton-ver-saldo').click(function (){
		$('#caja-llenado').append('<div class="col-xs-10 col-xs-offset-1 text-center saldo-final" id="caja-saldo-final"><div class="row text-center saldo-total"><h4>SALDO TOTAL</h4></div><div class="row text-center valor-total"><h1 id="saldo-final-tarj"></h1></div></div>');

	});	
})
*/
/*API*/
$(document).ready(function(){
	$("#boton-ver-saldo").on("click", function(){ 
		var saldoTotal = $("#input-tarjeta").val();
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + saldoTotal, 
            type: 'GET',
            datatype: 'JSON',
            
        })

        .done(function(response){
        	$("#saldo-final-tarj").append("<h1 id='saldo-final-tarj'>"+ response.saldoTarjeta + "</h1>") 
        	    console.log(response.saldoTarjeta);
        })

        .fail(function(error){
            console.log("error");
        })
    });
})