import productos from "./catalogo.js";

// Referencia 
const catalogo = document.getElementById("catalogo-productos")
const botonFiltrar = document.getElementById("boton-filtrar")
const selectCategoria = document.getElementById("categoria-nombre")

//Lista todos los productos al recargar la pagina
let htmlARenderizar = ""

// recorrer arary productos
productos.articulos.forEach((articulo)=>{
    htmlARenderizar += `
        <div class="contenedor-productos" id="catalogo-productos">
            <article class="producto-article producto-article--color">
                <figure class="producto-article__img">
                    <img src="${articulo.imagen}" alt="iphone14">
                </figure>
                <div class="producto-article__info">
                    <h2 class="producto-article__titulo">${articulo.nombre}</h2>
                    <h3>${articulo.precio}</h3>
                    <div class="contenedor-descripcion__producto">
                            <p class="descripcion-producto__p">${articulo.descripcion}</p>
                    </div>
                    <button class="producto-article__boton boton-oscuro">Ver Producto</button>
                </div>
            </article>
        </div>
        ` 
})

catalogo.innerHTML = htmlARenderizar

// Para renderizar los productos en el catalogo
function renderizarProductos(listaProductos){
    let htmlARenderizar = ""
    listaProductos.forEach((articulo)=>{
        htmlARenderizar += `
            <div class="contenedor-productos" id="catalogo-productos">
                <article class="producto-article producto-article--color">
                    <figure class="producto-article__img">
                        <img src="${articulo.imagen}" alt="iphone14">
                    </figure>
                    <div class="producto-article__info">
                        <h2 class="producto-article__titulo">${articulo.nombre}</h2>
                        <h3>${articulo.precio}</h3>
                        <div class="contenedor-descripcion__producto">
                                <p class="descripcion-producto__p">${articulo.descripcion}</p>
                        </div>
                        <button class="producto-article__boton boton-oscuro">Ver Producto</button>
                    </div>
                </article>
            </div>
            ` 
    })
    catalogo.innerHTML = htmlARenderizar
}


// Funcion para filtrar productos por categoria
function filtrarProductosPorCategoria(categoriaSeleccionada) {
    const productosFiltrados = productos.articulos.filter(
        (articulo) => articulo.categoria === categoriaSeleccionada || categoriaSeleccionada === "todos"
    );
    renderizarProductos(productosFiltrados);
}


// Manejar evento de click en el boton filtrar
botonFiltrar.addEventListener("click", () => {
    const categoriaSeleccionada = selectCategoria.value;
    filtrarProductosPorCategoria(categoriaSeleccionada);
});

