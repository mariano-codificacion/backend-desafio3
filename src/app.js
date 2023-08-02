
import express from 'express'
import { Product } from './product.js'
import { ProductManager } from './productManager.js'

//app va a poder ejecutar todos los metodos de express
const app = express()

const PORT = 4000

//Poder ejecutar queries complejas
app.use(express.urlencoded({ extended: true }))

const productManager = new ProductManager('./src/prueba.txt')
const product1 = new Product("yerba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)
const product2 = new Product("leche", "Este es un producto prueba", 220, "Sin imagen", "abc124", 20)
const product3 = new Product("yogurt", "Este es un producto prueba", 220, "Sin imagen", "abc125", 20)
const product4 = new Product("azucar", "Este es un producto prueba", 220, "Sin imagen", "abc126", 20)
const product5 = new Product("queso", "Este es un producto prueba", 220, "Sin imagen", "abc127", 20)
const product6 = new Product("costilla", "Este es un producto prueba", 220, "Sin imagen", "abc128", 20)
const product7 = new Product("chorizo", "Este es un producto prueba", 220, "Sin imagen", "abc129", 20)
const product8 = new Product("morcilla", "Este es un producto prueba", 220, "Sin imagen", "abc130", 20)
const product9 = new Product("vacio", "Este es un producto prueba", 220, "Sin imagen", "abc131", 20)
const product10 = new Product("cafe", "Este es un producto prueba", 220, "Sin imagen", "abc132", 20)
productManager.addProduct(product1)
productManager.addProduct(product2)
productManager.addProduct(product3)
productManager.addProduct(product4)
productManager.addProduct(product5)
productManager.addProduct(product6)
productManager.addProduct(product7)
productManager.addProduct(product8)
productManager.addProduct(product9)
productManager.addProduct(product10)

app.get('/', (req, res) => {
    res.send("Hola desde el sur")
})

//res.send() actua como un return implicito
app.get('/productos/:id', async (req, res) => {
    productManager.getProductById();
    const prod = productManager.find(prod => prod.id === parseInt(req.params.id))
    if (prod)
        res.send(prod)
    res.send("Producto no encontrado")
})

app.get('/productos', async (req, res) => {
    productManager.getProducts();
    const { categoria } = req.query
    const prods = productManager.filter(prod => prod.categoria === categoria)
    res.send(prods)
})

//Ruta 404 es la ultima que se define
app.get('*', (req, res) => {
    res.send("Error 404")
})


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

//POR FAVOR PARA DEVOLVER POR LIMITE EN EL ARRAY USEN SLICE Y NO SPLICE