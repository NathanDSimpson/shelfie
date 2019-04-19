require("dotenv").config();
const express = require("express");
const massive = require("massive");
const Controller = require('./controller')

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
})
.catch(err => console.log(`we have an error in our massive function of index.js: ${err}`))

app.use(express.json());

app.get('/api/inventory', Controller.readAll); // for all products
app.get('/api/inventory/:id', Controller.readOne); // for a single product
app.post('/api/product', Controller.create); // create a product
// app.put(`/api/inventory/:id?name=${}?price=${}?imgUrl=${}`, Controller.update);  // edit/update a product
app.delete('/api/inventory/:id', Controller.delete); // delete a product

app.listen(SERVER_PORT, () => {
    console.log(`server listening on port: ${SERVER_PORT}`)
})



