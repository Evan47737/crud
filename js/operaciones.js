const db = firestore();

function agregarprod(){
    let producto=document.getElementById('inproducto').value;
    let presio=document.getElementById('inprecio').value;
    let precioV=document.getElementById('inprecioventa').value;
    let existencia=document.getElementById('incantidad').value;
    let imagen=document.getElementById('inimagen').value;
    let categoria=document.getElementById('selcategoria').value;

    precioV=parseFloat(precioV);
    presio=parseFloat(presio);
    existencia=parseInt(existencia);
    // add a new document with a generated id.
    db.collection('Productos').add({
        Producto:producto,
        Presio:presio,
        PresioV:precioV,
        Existencia:existencia,
        Imagen:imagen,
        Categoria:categoria
    })
    .then(()=>{
        alert("Producto añadido correctamente");
    })
    .catch((error)=>{
        alert("Error al añadir el producto:"+error)
    });
}