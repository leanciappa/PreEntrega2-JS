class Cart{
    constructor(id, category, price, description ){
        this.id = id
        this.category = category
        this.price = price
        this.description = description
        
    }

    agregar (products){
        this.listProduct.push(products)
    }
}

class ProductController{
    constructor(){
        this.listProduct = []
    }
}

const productsController = new ProductController ()
