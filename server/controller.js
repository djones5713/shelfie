module.exports = {
    create:(req, res, next) => {
        const db = req.app.get('db');
        const { item_id, name, price, image } = req.body
     

        db.create_item([ item_id, name, price, image])
        .then((items) => res.status(200).send(items))
        .catch(err => {
            res.status(500).send({err: 'Something is wrong'});
            console.log('POST', err)
        })
    },
 

    getAll:(req, res, next) => {
        const db = req.app.get('db')
        console.log('HERE THEY ARE')
        db.get_all_items()
        .then((items) => res.status(200).send(items))
        .catch(err => {
            res.status(500).send({err: "Something is wrong"})
            console.log('GET ALL', err)
        })
    },

    update:(req, res, next) => {
        const db = req.app.get('db');
        const { item_id } = req.params;
        const { name } = req.query;

        console.log('UPDATE! GOT IT!')

        db.update_item([ item_id, name ])
        .then((items) => res.status(200).send(items))
        .catch(err => {
            res.status(500).send({err: "Something is wrong"})
            console.log('UPDATE', err)
        })
    },
    delete:(req, res, next) => {
    const db = req.app.get('db');
    const { item_id } = req.params;
    
    console.log('GET OUUTA HERE')

    db.delete_item([item_id])
    .then((items) => res.status(200).send(items))
    .catch(err => {
       res.status(500).send({err: "Something is wrong"})
       console.log('DELETE', err)
    })

    }
}