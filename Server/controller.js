module.exports = {
    readAll: (req, res) => {
        const dbInstance= req.app.get('db')
        // res.status(200).send(`this is working`)
        dbInstance.readAll()
            .then(products => res.status(200).send(products))
            .catch( err => {
                res.status(500).send({errorMessage: "Something is wrong in readAll of controller.js"})
                console.log(err)
            })
    },

    readOne: (req, res) => {
        const dbInstance= req.app.get('db')
        const {id} = req.params

        dbInstance.readOne([id])
        .then( product => res.status(200).send(product))
        .catch( err => {
            res.status(500).send({errorMessage: `Something is wrong in readSingle of controller.js`})
            console.log(err)
        })
    },

    create: (req, res) => {
        const dbInstance= req.app.get('db')
        const {name, price, imgUrl} = req.body
        dbInstance.create([name, price, imgUrl])
        .then( () => res.sendStatus(200) )   //  THIS LINE IS ODD 'sendStatus(200)' instead of res.status(200).send()
        .catch( err => {
            res.status(500).send({errorMessage: `Something is wrong in create of controller.js`})
            console.log(err)
        })

    },

    update: (req, res) => {
        const dbInstance= req.app.get('db')
        const {query, params} = req
        dbInstance.update([params.id, query.name, query.price, query.imgUrl])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: `Something is wrong in update of controller.js`})
            console.log(err)
        })
    },

    delete: (req, res) => {
        const dbInstance= req.app.get('db')
        const {id} = req.params
        dbInstance.delete([id])
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: `Something is wrong in delete of controller.js`})
            console.log(err)
        })
    },
}