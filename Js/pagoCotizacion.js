$(document).ready(function(){
    var ID_Producto = 0;
    var Cantidad = 0;
    var Precio = 0;
    cargarCategorias();
    
    sacarTotal();

    $("#botonComprar").click(function(){
        pagar();
    });


function cargarCategorias(){
    $.ajax({
        type: "post",
        dataType:"json",
        url:"./php/MetodopagoTodo.php",
        data: {},
        success: function(data){
            if(data == null)
            {
                alert("No hubo resultados...");
                return
            }
            for (var i = 0; i < data.length; i++)
            {
            $('#Metodopago').append($('<option>',{
                value: data[i].ID_Metodopago,
                text: data[i].Nombre
                }));
            }
        },
        error: function(err) {
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            alert("Error con la peticion de la base de datos.");
        }
    });
}
function sacarTotal()
{
    $.ajax({
        type: "get",
        dataType:"json",
        url:"./php/ChatObtenerMensaje.php",
        data: {},
        success: function(data){
            $("#divTotal #total").remove();
            for (var i = 0; i < data.length; i++)
            {
                console.log(data[i]);
                ID_Producto = data[i].ID_Producto;
                Cantidad = data[i].Cantidad;
                Precio = data[i].Precio;
                var total = data[i].Cantidad * data[i].Precio;
                $("#Total").val(total)
                console.log("Total a pagar: " + total);
                pagarPaypal(total);
            }
        },
        error: function(err) {
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
        }
    })
}

function pagar()
{
    $.ajax({
        type: "post",
        url:"./php/CompraCrear.php",
        data: {},
        success: function(data){
            conseguirCompra();
            alert("Compra iniciada");
        },
        error: function(err){
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            alert("Error con la peticion de la base de datos.");
        }
    })
}

function conseguirCompra()
{
    var idCompra = 0;
    $.ajax({
        type: "post",
        dataType:"json",
        url:"./php/FuncionCompraReciente.php",
        data: {},
        success: function(data){
            if(data == null)
            {
                alert("No hubo resultados...");
                return
            }
            for (var i = 0; i < data.length; i++)
            {
                idCompra = data[i].compra;
                //alert("Compra numero:" + idCompra);
                obtenerProductosCarrito(idCompra);
            }
        },
        error: function(err) {
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            alert("Error con la peticion de la base de datos.");
        }
    });
}

function obtenerProductosCarrito(idCompra)
{
    var direccion = $("#Direccion").val()
    var tipoPago = $("#Metodopago").val()
    meterProductoACompra(idCompra, ID_Producto, Cantidad, Precio);
    terminarCompra(idCompra, direccion, tipoPago);

}
function meterProductoACompra(compra, producto, cantidad, precio)
{
    $.ajax({
        type: "post",
        url:"./php/CompraMeterProducto.php",
        data: {"ID_Compra": compra, "ID_Producto": producto, "Cantidad": cantidad , "Precio": precio},
        success: function(){
            //alert("metido");
        },
        error: function(err) {
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            alert("Error al modificar categoria.");
        }
    });
}

function terminarCompra(id, direccion, metodo)
{
    $.ajax({
        type: "post",
        url:"./php/CompraTerminar.php",
        data: {"ID_Compra": id, "Direccion": direccion , "ID_Metodo": metodo},
        success: function(){
            alert("Compra exitosa!");
            window.location.href='principal.html';
        },
        error: function(err) {
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            alert("Error al terminar compra.");
        }
    });

}

function pagarPaypal(total){
    paypal.Buttons({

        // Call your server to set up the transaction
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units:[{
                    amount:{
                        value:total
                    }
                }]
            });
        },

        // Call your server to finalize the transaction
        onApprove: function(data, actions) {
            $("#Metodopago").val(3);
            pagar();
           // alert("Pagado con paypal!");
            return actions.order.capture().then(function(orderData){
                const transaction = orderData.purchase_units[0].payments.captures[0];
            });

        }

    }).render('#paypal-button-container');
}

})