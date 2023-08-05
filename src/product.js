
import { ProductManager } from './productManager.js'
export class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementarID()
    }
    //static significa metodo de clase
    static incrementarID() {
        if (this.idIncrement) { //Atributo de la clase. Si no existe, lo creo. Si existe, lo aumento en 1
            this.idIncrement++ //Si existe, lo aumento en uno
        } else {
            this.idIncrement = 1 //Valor inicial
        }
        return this.idIncrement
    }
    cargar () {
    const productManager = new ProductManager('./src/prueba.json')
    //const product1 = new Product("Leche", "Entera", 1000, "Sin imagen", "lac100", 20)
    //productManager.addProduct(product1)
    const product2 = new Product("Yogurt", "Natural", 400, "Sin imagen", "lac101", 20)
    productManager.addProduct(product2)
    const product3 = new Product("Queso", "Cremoso", 2000, "Sin imagen", "lac102", 20)
    productManager.addProduct(product3)
    const product4 = new Product("Manteca", "Natural", 400, "Sin imagen", "lac103", 20)
    productManager.addProduct(product4)
    const product5 = new Product("Margarina", "Untable", 300, "Sin imagen", "lac104", 20)
    productManager.addProduct(product5)
    const product6 = new Product("Costilla", "Novillito", 2000, "Sin imagen", "Asa100", 20)
    productManager.addProduct(product6)
    const product7 = new Product("Vacio", "Novillito", 2500, "Sin imagen", "Asa101", 20)
    productManager.addProduct(product7)
    const product8 = new Product("Tapa de Asado", "Novillito", 2000, "Sin imagen", "Asa102", 20)
    productManager.addProduct(product8)
    const product9 = new Product("Falda", "Novillito", 1500, "Sin imagen", "Asa103", 20)
    productManager.addProduct(product9)
    const product10 = new Product("Entrecot", "Novillito", 2000, "Sin imagen", "Asa104", 20)
    productManager.addProduct(product10)
    }
}
 