$(document).ready(function(){

let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

$(document).on('click','.item', function() {
    cargar(this);
    var prod = this.id;
    console.log(prod);
    // $.ajax({
    //     type: "post",
    //     url:"../API/ProdListBorrar.php",
    //     data: {"Producto": prod},
    //     success: function(data){
    //         alert("Borrado!");
    //         recargarProductos();
    //     },
    //     error: function(err) {
    //         console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
    //         alert("Error con la peticion de la base de datos.");
    //     }
});



function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    //imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    // modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    // descripSeleccionada.innerHTML = "Descripción del modelo ";

    // precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
    
}

mostrarTodosProductos();
function mostrarTodosProductos(){
    {
        console.log("empezao");
        $.ajax({
            type: "get",
            dataType:"json",
            url:"./php/ProductoVendedor.php",
            data: null,
            success: function(data){
                $("#mostrador div").remove();
                if(data == null)
                {
                    alert("No tienes productos");
                    return;
                }
                console.log(data);
                for (var i = 0; i < data.length; i++)
                {
                console.log(data[i].Nombre);
                console.log(data[i].Descripcion);
                $("#mostrador").append(
                   ' <div class="item"  id ="' + data[i].ID_Producto + '"> ' +
                    '<div class="contenedor-foto"> ' +
                        '<img src=' + "img/1.png" + 'alt="">' +
                    '</div>' +
                    '<p class="descripcion">' + data[i].Nombre + '</p>' +
                    '<span class="precio">' +  data[i].Precio + ' </span> ' +
                    '<span class="existencia">' + data[i].Existencia + '</span>' +
                '</div>'
                )
                // $('#TablaCategorias').append(
                // '<tr class = "rowCategoria" id=' + data[i].ID_Categoria + '>' +
                // '<td>' + data[i].Nombre +
                // '</td><td>' + data[i].Descripcion +
                // '</td><td>' + '<button class = "modificarCategoria" id =' + data[i].ID_Categoria + '> Modificar </button>' +
                // '</td></tr>');
                }
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error al intentar cargar su carrito.");
            }
        })
    }
}

});