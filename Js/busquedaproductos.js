$(document).ready(function () {
    $(".botonbusqueda").click(function () {

        var tipoBusqueda = "Normal";
        var busqueda = $("#BarraBuscar").val();
        if ($("#radioNormal").is(":checked")) {
            tipoBusqueda = "Normal";
        }
        if ($("#radioMayorPrecio").is(":checked")) {
            tipoBusqueda = "MayorPrecio";
        }
        if ($("#radioMenorPrecio").is(":checked")) {
            tipoBusqueda = "MenorPrecio";
        }
        if ($("#radioMejorEvaluacion").is(":checked")) {
            tipoBusqueda = "MejorEvaluacion";
        }

        $.ajax({
            type: "post",
            dataType: "json",
            url: "./php/ProductoBusqueda.php",
            data: { "Busqueda": busqueda, "Tipo": tipoBusqueda },
            success: function (data) {
                $("#TablaProductos tr.rowProducto").remove();
                if (data == null) {
                    alert("No hubo resultados...");
                    return;
                }
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].ID_Producto);
                    console.log(data[i].Nombre);
                    console.log(data[i].Precio);
                    $('#TablaProductos').append(
                        '<tr class = "rowProducto" id=' + data[i].ID_Producto + '>' +
                        '<td>' + data[i].Nombre +
                        '</td><td>' + data[i].Precio +
                        '</td><td>' + data[i].Categoria +
                        '</td><td>' + data[i].Calificacion +
                        '</td><td>' + data[i].Vendedor +
                        '</td></tr>');

                }
            },
            error: function (err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error con la peticion de la base de datos.");
            }
        });
    });

    $(document).on('click', '.rowProducto', function () {
        var id = this.id;
        console.log(id);
        $.ajax({
            type: "post",
            url: "./utilidades/ElegirProducto.php",
            data: { "ID": id },
            success: function () {
                window.location.href = 'producto.php';
            },
            error: function (err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error al modificar categoria.");
            }
        });
    });


});