

function agregarprod() {
    let producto = document.getElementById('inproducto').value;
    let presio = document.getElementById('inprecio').value;
    let precioV = document.getElementById('inprecioventa').value;
    let existencia = document.getElementById('incantidad').value;
    let imagen = document.getElementById('inimagen').value;
    let categoria = document.getElementById('selcategoria').value;

    precioV = parseFloat(precioV);
    presio = parseFloat(presio);
    existencia = parseInt(existencia);
    // add a new document with a generated id.
    db.collection('Productos').add({
        Producto: producto,
        Presio: presio,
        PresioV: precioV,
        Existencia: existencia,
        Imagen: imagen,
        Categoria: categoria
    })
        .then(() => {
            alert("Producto añadido correctamente");
        })
        .catch((error) => {
            alert("Error al añadir el producto:" + error)
        });
}

function buscarcate(cate) {
    let ventana = document.getElementById('resultadobus');
    ventana.innerHTML = '';
    db.collection("Productos").where("Categoria", "==", cate)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                ventana.innerHTML += `
           <div class="card m-2" style="width: 18rem;">
                        <img src="${doc.data().Imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${doc.data().Producto}</h5>
                            <p class="card-text"><strong>id:</strong>${doc.id}</p>
                            <p class="card-text"><strong>Precio:$</strong>${doc.data().Presio}</p>
                            <p class="card-text"><strong>PrecioVenta:$</strong>${doc.data().PresioV}</p>
                            <p class="card-text"><strong>Existencias:</strong>${doc.data().Existencia}</p>
                           <p class="card-text"><strong>Categoria:</strong>${doc.data().Categoria}</p>
                          
                        </div>
                    </div>
           `;

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

function buscarnom() {
    let ventana = document.getElementById('resultadobus');
    let busqueda = document.getElementById('busqueda').value;
    ventana.innerHTML = '';
    db.collection("Productos").where("Producto", "==", busqueda)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                ventana.innerHTML += `
           <div class="card m-2" style="width: 18rem;">
                        <img src="${doc.data().Imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${doc.data().Producto}</h5>
                            <p class="card-text"><strong>id:</strong>${doc.id}</p>
                            <p class="card-text"><strong>Precio:$</strong>${doc.data().Presio}</p>
                            <p class="card-text"><strong>PrecioVenta:$</strong>${doc.data().PresioV}</p>
                            <p class="card-text"><strong>Existencias:</strong>${doc.data().Existencia}</p>
                           <p class="card-text"><strong>Categoria:</strong>${doc.data().Categoria}</p>
                         
                        </div>
                    </div>
           `;

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

function Rellenarprod() {
    let idprod = document.getElementById('idprod').value;

    var docRef = db.collection("Productos").doc(idprod);

    docRef.get().then((doc) => {
        if (doc.exists) {
            document.getElementById('inproducto').value = `${doc.data().Producto}`;
            document.getElementById('inprecio').value = `${doc.data().Presio}`;
            document.getElementById('inprecioventa').value = `${doc.data().PresioV}`;
            document.getElementById('incantidad').value = `${doc.data().Existencia}`;
            document.getElementById('inimagen').value = `${doc.data().Imagen}`;
            document.getElementById('selcategoria').value = `${doc.data().Categoria}`;

        } else {
            alert("Ese Id no esta ligado con ningun producto");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function Actualizar() {
    let idprod = document.getElementById('idprod').value;

    var docRef = db.collection("Productos").doc(idprod);

    let producto = document.getElementById('inproducto').value;
    let presio = document.getElementById('inprecio').value;
    let precioV = document.getElementById('inprecioventa').value;
    let existencia = document.getElementById('incantidad').value;
    let imagen = document.getElementById('inimagen').value;
    let categoria = document.getElementById('selcategoria').value;

    precioV = parseFloat(precioV);
    presio = parseFloat(presio);
    existencia = parseInt(existencia);

    // Set the "capital" field of the city 'DC'
    return docRef.update({
        Producto: producto,
        Presio: presio,
        PresioV: precioV,
        Existencia: existencia,
        Imagen: imagen,
        Categoria: categoria
    })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
}