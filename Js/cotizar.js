const btnDepartamentos = document.getElementById('btn-departamentos'),
	  btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	  grid = document.getElementById('grid'),
	  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
	  contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
	  esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
		grid.classList.add('activo');
	}
});

grid.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		grid.classList.remove('activo');
	}
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if(!esDispositivoMovil()){
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		};
	});
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
	e.preventDefault();
	if(contenedorEnlacesNav.classList.contains('activo')){
		contenedorEnlacesNav.classList.remove('activo');
		document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
	}
});

// Click en boton de todos los departamentos (Para version movil).
btnDepartamentos.addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});

// Boton de regresar en el menu de categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.remove('activo');
	btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		if(esDispositivoMovil()){
			contenedorSubCategorias.classList.add('activo');
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		}
	});
});

// Boton de regresar en el menu de categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubCategorias.classList.remove('activo');
	});
});

btnCerrarMenu.addEventListener('click', (e)=> {
	e.preventDefault();
	document.querySelectorAll('#menu .activo').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
	document.querySelector('body').style.overflow = 'visible';
});

// ... (código anterior)

// Array para almacenar los productos en la cotización
const productosEnCotizacion = [];

// Función para calcular el subtotal y el impuesto
function calcularSubtotalImpuesto() {
    let subtotal = 0;
    productosEnCotizacion.forEach((producto) => {
        subtotal += producto.precioTotal;
    });

    const impuesto = subtotal * 0.18; // Impuesto del 18%
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('impuesto').textContent = impuesto.toFixed(2);

    return subtotal + impuesto;
}

// Función para actualizar el total de la cotización
function actualizarTotalCotizacion() {
    const totalCotizacion = calcularSubtotalImpuesto();
    document.getElementById('total-cotizacion').textContent = totalCotizacion.toFixed(2);
}

// EventListener para el botón "Finalizar Compra"
document.getElementById('btn-finalizar-compra').addEventListener('click', () => {
    // Aquí puedes implementar la lógica para finalizar la compra
    // Por ejemplo, enviar los datos de la cotización al servidor o realizar otras acciones necesarias
    // También puedes reiniciar la tabla y los cálculos si es necesario
    productosEnCotizacion.length = 0;
    document.querySelector('.cotizacion-table tbody').innerHTML = '';
    actualizarTotalCotizacion();
});

// EventListener para el botón "Cancelar"
document.getElementById('btn-cancelar').addEventListener('click', () => {
    // Aquí puedes implementar la lógica para cancelar la cotización
    // Por ejemplo, eliminar todos los productos de la tabla
    productosEnCotizacion.length = 0;
    document.querySelector('.cotizacion-table tbody').innerHTML = '';
    actualizarTotalCotizacion();
});

// ... (otros EventListeners existentes)
