function verregistro() {

    let ventana = document.getElementById('Ventanas');

    ventana.innerHTML= `
    <label for="Nombre de el Producto" class="form-label text-white m-2">Nombre de el Producto</label>
        <input type="text" class="form-control" id="inproducto" placeholder="Producto Nombre" class="form-control m-2">

        <div class="d-flex flex-row justify-content-between m-2">
            <div class="col-3">
                <label for="Precio de el Producto" class="form-label text-white ">Precio de el Producto</label>
                <input type="text" class="form-control m-2" id="inprecio" placeholder="Producto Precio"
                    class="form-control m-2">
            </div>
            <div class="col-3">
                <label for="Cantidad de Producto" class="form-label text-white ">Existencias de el Producto</label>
                <input type="text" class="form-control m-2" id="incantidad" placeholder="Producto Cantidad"
                    class="form-control m-2">
            </div>
            <div class="col-3">
                <label for="Precio Venta de el Producto" class="form-label text-white ">Precio Venta de el
                    Producto</label>
                <input type="text" class="form-control" id="inprecioventa" placeholder="Precio Venta"
                    class="form-control m-2">
            </div>
        </div>

        <div class="d-flex flex-row justify-content-between m-2">
            <div class="col-5">
                <label for="imagen del Producto" class="form-label text-white">imagen del Producto</label>
                <input type="text" class="form-control m-2" id="inimagen" placeholder="Enlace de la Imagen"
                    class="form-control m-2">
            </div>
            <div class="col-5">
                <label for="Categoria de el Producto" class="form-label text-white m-2">Categoria de el Producto</label>
                <select class="form-select m-2" aria-label="Default select example" id="selcategoria">
                    <option selected>Categoria</option>
                    <option value="bebida">Bebidas</option>
                    <option value="dulce">Dulces</option>
                    <option value="botana">Botanas</option>
                    <option value="despenza">Despenza</option>
                </select>
            </div>
        </div>

        
       <button class="btn btn-primary w-100 m-2" type="button" onclick="agregarprod()">Agregar
                Producto</button>
    `;
}

function verproductos() {

    let ventana = document.getElementById('Ventanas');

    ventana.innerHTML= `
    <div class="d-flex flex-row justify-content-between m-2">
            <div class="col-3">
                <button class="btn btn-primary w-100 m-2">Categoria1</button>
                <button class="btn btn-primary w-100 m-2">Categoria2</button>
                <button class="btn btn-primary w-100 m-2">Categoria3</button>
                <button class="btn btn-primary w-100 m-2">Categoria4</button>
                <input type="text" class="form-control m-2" id="busqueda" placeholder="Buscar por nombre">
                <button class="btn btn-primary w-100 m-2">Buscar1</button>
            </div>
            <div class="col-9">
                <div class="d-flex flex-row justify-content-evenly flex-wrap" id="resultadobus">
                    
                </div>
            </div>
        </div>
    `;
}