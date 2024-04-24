document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");

    // Datos de muestra (puedes reemplazarlos con tus propios datos)
    const products = [
        {
            name: "Producto 1",
            price: "$19.99",
            image: "product1.jpg",
        },
        {
            name: "Producto 2",
            price: "$29.99",
            image: "product2.jpg",
        },
        {
            name: "Producto 3",
            price: "$39.99",
            image: "product3.jpg",
        },
    ];

    // Mostrar productos en la lista
    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = product.price;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);

        productList.appendChild(productItem);
    });
});

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

document.addEventListener("DOMContentLoaded", function () {
    // ...

    // Agregar eventos a los botones "Comprar" y "Eliminar"
    const buyButtons = document.querySelectorAll(".buy-button");
    const deleteButtons = document.querySelectorAll(".delete-button");

    buyButtons.forEach((buyButton) => {
        buyButton.addEventListener("click", () => {
            // Lógica para comprar el producto (puedes personalizarla)
            alert("Has comprado un producto");
        });
    });

    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
            // Lógica para eliminar el producto (puedes personalizarla)
            const product = deleteButton.parentElement;
            product.remove(); // Elimina el producto de la lista
        });
    });

    // ...
});
