
import express from 'express'
import { ProductManager } from './productManager.js'
import { Product } from './product.js'
//app va a poder ejecutar todos los metodos de express
const app = express()

const PORT = 4000

//Poder ejecutar queries complejas
app.use(express.urlencoded({ extended: true }))
const productManager = new ProductManager('./src/prueba.json')
//const product = new Product ("Leche", "Entera", 1000, "Sin imagen", "lac100", 20)
//productManager.addProduct(product)
//product.cargar()

app.get('/', (req, res) => {
    res.send("Hola desde el sur")
})

app.get('/productos', async (req, res) => {
    const { limite } = req.query
    const products = await productManager.getProducts();
    if (limite){ 
    res.send(products.slice(0, limite)) 
    }else
    res.send(products);
})
//res.send() actua como un return implicito

app.get('/productos/:id', async (req, res) => {
    
    const prod = await productManager.getProductById(parseInt(req.params.id));
    //const prod = products.find(prod => prod.id === parseInt(req.params.id))
    if (prod){
        res.send(prod)
    }else
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







