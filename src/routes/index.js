const { Router } = require("express")
const router = Router()
const { db } = require('../firebase')
// ------ ARTISTAS ------
router.get('/artistas', async (req, res) => {
    try {
        const artistas = await db.collection('Artista').get()
        const datos = artistas.docs.map((art) => {
            return {
                id: art.id,
                ...art.data() //desectructuracion, guarda los datos por separado en una variable del mismo nombre
            }
        })
        res.send(datos)
    }
    catch (err){
        res.send('Ocurrio un error inesperado')
    }
})

router.get('/artistas/:id', async (req, res) => {
    try {
        const id = req.params.id
        const artista = await db.collection('Artista').doc(id).get()
        res.send(artista.data())
    }
    catch (err){
        res.send('Ocurrio un error inesperado')
    }
})

router.put('/artistas/:id', async (req, res) => {
    try {
        const id = req.params.id
        await db.collection('Artista').doc(id).update(req.body)
        res.send('Modificado')
    }
    catch (err){
        res.send('Ocurrio un error inesperado')
    }
})

router.delete('/artistas/:id', async (req, res) => {
    try {
        const id = req.params.id
        await db.collection('Artista').doc(id).delete()
        res.send('Borrado')
    }
    catch (err){
        res.send('Ocurrio un error inesperado')
    }
})

router.post('artistas', async (req, res) => {
    const body = req.body
    await db.collection('Artista').add({
        nombre: body.nombre,
        genero: body.genero,
        paisOrigen: body.paisOrigen,
        imagen: body.imagen,
        descripcion: body.descripcion
     })

} )

// -------- Canciones --------------
router.get('/canciones', async (req, res) => {
    try {
        const canciones = await db.collection('Canción').get()
        const datos = canciones.docs.map((canc) => {
            return {
                id: canc.id,
                ...canc.data() //desectructuracion, guarda los datos por separado en una variable del mismo nombre
            }
        })
        res.send(datos)
    }
    catch (err){
        console.log(err)
        res.send('Ocurrio un error inesperado')
    }
})

module.exports = router