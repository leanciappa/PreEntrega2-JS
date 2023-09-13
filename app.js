class Producto{
    constructor(id, nombre, precio){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad = 1
    }
}
    
    class ControladorProducto{
    constructor(){
        this.listaProductos= []
    }
    agregar (producto){
        this.listaProductos.push(producto)
    }
    mostrar(){
        let descripcion= ""
        this.listaProductos.forEach(producto =>{
            
            descripcion += "Id:"+producto.id+" Nombre:"+producto.nombre+" Precio:"+producto.precio+" Cantidad:"+producto.cantidad+"\n"
        })
    return descripcion;
    }
}

class Carrito {
    constructor(){

        this.listaCarrito = [],
        this.total= 0
    }
}


alert("Ingresar el listado de productos del ecommerce")

const controladorProductos = new ControladorProducto()


//Generación de listado de productos 
let rta= " "

do{
    let id = prompt ("Ingrese el id del producto: ")
    let nombre = prompt ("Ingrese el nombre del producto: ")
    let precio = Number(prompt ("Ingrese el precio del producto: "))
    let cantidad = Number(prompt ("Ingrese la cantidad: "))
    
    let producto1 = new Producto (id, nombre, precio, cantidad)
    controladorProductos.agregar (producto1)
    alert(controladorProductos.mostrar())
        
    rta = prompt ("Si Desea salir de la carga de productos, escriba 'ESC':")
} while (rta != 'ESC')



// Compra de productos

alert("Elija el productos a comprar:"+"\n"+controladorProductos.mostrar())




