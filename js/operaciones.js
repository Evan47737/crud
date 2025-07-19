const db = firebase.firestore();

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

function buscarcate(cate){
        let ventana = document.getElementById('resultadobus');
        ventana.innerHTML='';
        db.collection("Productos").where("Categoria", "==", cate)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           ventana.innerHTML+=`
           <div class="card m-2" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text"><strong>id:</strong>${doc.id}</p>
                            <p class="card-text"><strong>Nombre Producto:</strong>${doc.data().Producto}</p>
                            <p class="card-text"><strong>Precio:$</strong>15</p>
                            <p class="card-text"><strong>PrecioVenta:$</strong>22</p>
                            <p class="card-text"><strong>Existencia de el Producto:</strong>20</p>
                           <p class="card-text"><strong>Categoria de el Producto:</strong>Botana</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
           `;
           
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}