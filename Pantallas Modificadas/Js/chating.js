$(document).ready(function(){
	


cargarProductosCotizables();
// sendButton.addEventListener('click', () => {
//     const messageText = messageInput.value.trim();
//     if (messageText !== '') {
//         const message = document.createElement('div');
//         message.className = 'message sent';
//         message.textContent = messageText;
//         chat.appendChild(message);
//         messageInput.value = '';
//         // Puedes agregar lógica adicional, como enviar el mensaje a un servidor aquí
//     }
// });



  $("#send-button").click(function(){
	mandarMensaje();
});

  $(document).on('click','.usuario', function() {
	var id = this.id;
	$("#inputOtroUsuario").val(id);
	console.log("ID del click: " + id);
	console.log($("#inputOtroUsuario").val());
	buscarUsuarioID();
});

$(document).on('click','.botonCotizacion', function() {
	var id = this.id;
	console.log(id);
	$.ajax({
		type: "post",
		url:"./utilidades/ElegirMensaje.php",
		data: {"ID_Mensaje": id},
		success: function(data){
			window.location.href='metodopagoCotizacion.php';
			console.log("Conseguido:" + id);
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error con la peticion de la base de datos.");
		}
	});

});

$("#BotonBuscar").click(function(){
	var busqueda = $("#BarraBuscar").val();
	console.log("YES");
	$.ajax({
		type: "post",
		dataType:"json",
		url:"./php/UsuarioBusqueda.php",
		data: {"Busqueda": busqueda},
		success: function(data){
			$("#TablaUsuarios tr.rowUsuario").remove();
			if(data == null)
			{
				alert("No hubo resultados...");
				return;
			}
			console.log(data);
			for (var i = 0; i < data.length; i++)
			{
			$('.users-list').append(
				'<li><a href="#" class = "usuario" id = "' + data[i].ID_Usuario + '">' + data[i].Usuario + '</a></li>');
			}
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error con la peticion de la base de datos.");
		}
	});
});

$("#profile-button").click(function(){
	var usu = $("#inputOtroUsuario").val();
	console.log("YES");
	$.ajax({
		type: "post",
		url:"./utilidades/ElegirUsuario.php",
		data: {"ID_Usuario": usu},
		success: function(data){
			window.location.href='PerfilVen.html';
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error con la peticion de la base de datos.");
		}
	});
});


function cargarProductosCotizables()
{
$.ajax({
	type: "get",
	dataType:"json",
	url:"./php/ProductoBusquedaCotizar.php",
	data: null,
	success: function(data){
		$("#TablaCategorias tr.rowCategoria").remove();
		if(data == null)
		{
			//alert("No tienes categorias");
			return;
		}
		console.log(data);
		for (var i = 0; i < data.length; i++)
		{
			$('#select-input').append($('<option>',{
				value: data[i].ID_Producto,
				text: data[i].Nombre
				}));
		}
	},
	error: function(err) {
		console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
		alert("Error al intentar cargar sus productos.");
	}
});
}

  function buscarUsuarioID()
  {
	  var destinatario = $("#inputOtroUsuario").val()
	  $.ajax({
		  type: "post",
		  dataType:"json",
		  url:"./php/UsuarioBuscarID.php",
		  data: {"Usuario": destinatario},
		  success: function(data){
			  if(data == null)
			  {
				  alert("Usuario inexistente.");
				  return;
			  }
			  console.log(data);
			  for (var i = 0; i < data.length; i++)
			  {
				console.log("Usuario existe");
				  $("#inputOtroUsuario").val(data[i].ID_Usuario)
				  actualizarMensajesPersonales()
			  }
		  },
		  error: function(err) {
			  console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			  alert("Error con la peticion de la base de datos.");
		  }
	  });
  }
  function actualizarMensajesPersonales(){
	var ID_Usuario = $("#ID_Usuario").val();
	var ID_Destinatatio = $("#inputOtroUsuario").val();
	console.log("Persona a enviar: " + ID_Destinatatio);
	$.ajax({
		type: "post",
		dataType:"json",
		url:"./php/ChatCargarConversacion.php",
		data: {"ID_Destinatario": ID_Destinatatio},
		success: function(data){
			$("#TablaMensajes tr.rowMensaje").remove();
			if(data == null)
			{
				alert("No hubo resultados...");
				return;
			}
			console.log(data);
			console.log("nuevos mensajes!");
			$(".chat div").remove();
			for (var i = 0; i < data.length; i++)
			{
				if(data[i].Nombre != null && data[i].Cantidad > 0 && data[i].Precio  > 0)
				{
					if(data[i].ID_Remitente == ID_Usuario)
					{
					$(".chat").append(
						'<div class="message sent">' + data[i].Texto + 
						'<br>' + data[i].Nombre + 
						'<br>' + data[i].Cantidad + 
						'<br>' + data[i].Precio + 
						'<br> <button class = "botonCotizacion" id =' + data[i].ID_Mensaje  + '> Comprar </button>' + 
						'</div>'
					);
					}
					else{
						$(".chat").append(
							'<div class="message received">' + data[i].Texto + 
							'<br>' + data[i].Nombre + 
							'<br>' + data[i].Cantidad + 
							'<br>' + data[i].Precio + 
							'<br> <button class = "botonCotizacion" id =' + data[i].ID_Mensaje  + '> Comprar </button>' + 
							'</div>'
						);
					}
				}
				else
				{
					if(data[i].ID_Remitente == ID_Usuario)
					{
					$(".chat").append(
						'<div class="message sent">' + data[i].Texto + '</div>'
					);
					}
					else{
						$(".chat").append(
							'<div class="message received">' + data[i].Texto + '</div>'
						);
					}
			}
			//$("#inputOtroUsuario").val(data[i].ID_Remitente);
			//console.log("REMITENTE: " + $("#inputOtroUsuario").val());
			}
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error con la peticion de la base de datos.");
		}
	});
}
function mandarMensaje()
{
	var pro = $("#select-input").val();
	var can =$("#cantidad-input").val();
	var pre = $("#precio-input").val();

	 var tex = $("#message-input").val();
	 var usu = $("#inputOtroUsuario").val();
	 if(can == 0 || pre == 0)
	 {
	$.ajax({
		type: "post",
		url:"./php/ChatMandarMensaje.php",
		data: {"Texto": tex, "ID_Destinatario": usu},
		success: function(){
			//alert("Mensaje enviado!");
			actualizarMensajesPersonales();
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error al manda mensaje, intente de nuevo.");
		}
	});
	}
	else
	 {
		console.log(tex);
		console.log(usu);
		console.log(pro);
		console.log(can);
		console.log(pre);
		$.ajax({
			type: "post",
			url:"./php/ChatCotizar.php",
			data: {"Texto": tex, "ID_Destinatario": usu, "ID_Producto": pro, "Cantidad": can, "Precio": pre},
			success: function(){
				actualizarMensajesPersonales();
				//alert("Oferta enviada!");
			},
			error: function(err) {
				console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
				alert("Error al enviar cotizacion.");
			}
		});
	 }
	}

});