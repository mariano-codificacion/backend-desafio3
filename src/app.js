
import express from 'express'
import { ProductManager } from './productManager.js'

//app va a poder ejecutar todos los metodos de express
const app = express()

const PORT = 4000

//Poder ejecutar queries complejas
app.use(express.urlencoded({ extended: true }))

const productManager = new ProductManager('./src/prueba.txt')

app.get('/', (req, res) => {
    res.send("Hola desde el sur")
})

app.get('/productos', async (req, res) => {
    products = productManager.getProducts();
    const { categoria } = req.query
    const prods = products.filter(prod => prod.categoria === categoria)
    res.send(prods)
})
//res.send() actua como un return implicito
app.get('/productos/:id', async (req, res) => {
    
    products = productManager.getProductById('/productos/:id');
    const prod = products.find(prod => prod.id === parseInt(req.params.id))
    if (prod)
        res.send(prod)
    res.send("Producto no encontrado")
})

//Ruta 404 es la ultima que se define
app.get('*', (req, res) => {
    res.send("Error 404")
})


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

//POR FAVOR PARA DEVOLVER POR LIMITE EN EL ARRAY USEN SLICE Y NO SPLICE