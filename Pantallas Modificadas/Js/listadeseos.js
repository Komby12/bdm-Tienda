$(document).ready(function(){


    cargarListas();
    $('#botonAgregar').click(function(){
        var Nombre = $('#inputNombre').val();
        var Descripcion = $('#inputDescripcion').val();
        var Publico = 0;
        if($('#inputPublico').is(":checked"))
        {
            Publico = 1;
        }
        console.log(Publico);
        if(Nombre == "" || Descripcion == "")
        {
            alert("Favor de llenar los campos de nombre y descripcion");
            return;
        }

        $.ajax({
            type: "post",
            url:"./php/ListaCrear.php",
            data: {"Nombre": Nombre, "Descripcion": Descripcion, "Publica": Publico},
            success: function(){
                alert("Lista creada!");
                cargarListas();
                //cargarCategorias();
                //$('#myModal').hide();
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error al modificar categoria.");
            }
        });
    });

    $(document).on('click','.botonEliminar', function() {
        var id = this.id;
        console.log(id);
        $.ajax({
            type: "post",
            url:"./php/ListaEliminar.php",
            data: {"ID_Lista": id},
            success: function(data){
                alert("Lista eliminada"); 
                cargarListas();
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error con la peticion de la base de datos.");
            }
        });

    });

    $(document).on('click','.botonVer', function() {
        var id = this.id;
        console.log(id);
        $.ajax({
            type: "post",
            url:"./utilidades/ElegirLista.php",
            data: {"ID_Lista": id},
            success: function(data){
                window.location.href='productoslista.php';
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error con la peticion de la base de datos.");
            }
        });

    });

    function cargarListas()
    {
        $.ajax({
            type: "post",
            dataType:"json",
            url:"./php/ListaObtenerPropias.php",
            data: {},
            success: function(data){
                $("#product-list tr.rowLista").remove();
                if(data == null)
                {
                    alert("No hubo resultados...");
                    return
                }
                console.log(data);
                for (var i = 0; i < data.length; i++)
                {
                $('#product-list').append(
                '<tr class = "rowLista" id=' + data[i].ID + '>' + 
                '<td>' + data[i].Nombre +
                '</td><td>' + data[i].Descripcion +
                '</td><td>' + data[i].Publica +
                '</td><td> <button id =' + data[i].ID_Lista + ' class = "botonVer">Ver</button>' +
                '</td><td> <button id =' + data[i].ID_Lista + ' class = "botonEditar">Editar</button>' +
                '</td><td> <button id =' + data[i].ID_Lista + ' class = "botonEliminar">Eliminar</button>' +
                '</td></tr>');
    
                }
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error con la peticion de la base de datos.");
            }
        });
    }

});