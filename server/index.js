const express = require('express')
const app = express();
const massive = require("massive");
const controller = require("./controller");
require("dotenv").config();

massive(process.env.CONNECT_STRING)
.then(db => { app.set('db',db); console.log('connect to db')
}).catch(err => console.log(err))


app.use(express.json())


app.get('/api/items', controller.getAll)
app.post('/api/items', controller.create)
app.put('/api/items/:item_id', controller.update)
app.delete('/api/items/:item_id', controller.delete)



app.listen(4000, () => console.log('the port 4000 is up and running'));