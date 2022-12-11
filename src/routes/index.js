const { Router } = require("express")
const router = Router()
const { db } = require('../firebase')

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