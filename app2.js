class Producto {
    constructor (id, descripcion, cantidad){
        this.id = id
        this.descripcion = descripcion
        this.cantidad = cantidad
    }

}

class Gestionp {
    constructor (){
        this.productos = []
    }

    agregar (){
        do{
            let id = Number(prompt("Ingrese ID del objeto:"))
            let descripcion = prompt ("Ingrese descripción del producto:")
            let cantidad = Number (prompt("Ingrese cantidad de productos:"))
            productos.push(new Producto (id, descripcion, cantidad))
            agregar = Number (prompt ("Ingrese opción: 1- para continuar agregando"))
        }while (agregar == 1)
    }

}

class Carrito {
    constructor() {
        
    }
}



const productos = [];
let agregar = 0
let acumulador = ""

let operacion = Number (prompt ("Ingrese operacion: 1- Agregar productos, 2- Mostrar productos cargados, 3-Comprar productos ")) 
do {
    if (opcion === 1){
        productos.agregar();
    } else if (opcion == 2) {
        alert(mostrar ())

    } else if (opcion==3){
        alert(mostrar())
        let idproducto = prompt ("Ingrese el id del producto que desea comprar")




    } else {
        alert ("Debe ingresar una operacion");
    }

    let operacion = prompt ("Ingrese operacion:")
}while (operacion != 0  )




function mostrar (){
productos.forEach( producto =>{
    acumulador = acumulador + "id:"+producto.id+"" + " descripcion:"+producto.descripcion+ " cantidad:"+producto.cantidad+"\n"
    
})
 return acumulador
}

