const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Cupcakes = require('../models/cupcakes');

router.get('/', (req, res,next) => {
    Cupcakes.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);    
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res,next) => {
    const cupcake = new Cupcakes({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        ingredients: req.body.ingredients
    });
    cupcake
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Successfully added Cupcake',
                //createdCupcake: cupcake
            });
        })
        .catch(err => {
            console.log('Invalid Input');
            res.status(405).json({
                error: err
            });
        });
   
});

router.get('/:cupcakeId', (req, res,next) => {
    const id = req.params.cupcakeId;
    Cupcakes.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc){
                res.status(200).json(doc); 
            } else{
                res.status(404).json({message: 'Cupcake not found'});
            }
        })
        .catch(err => {
            console.log('Invalid ID supplied');
            res.status(400).json({error: err});
        });

});

router.put('/:cupcakeId', (req, res,next) => {
    const id = req.params.cupcakeId;
   
    Cupcakes.findByIdAndUpdate(id, {$set: req.body},{new:true})
    .then(result => {
        if(result){
            res.status(200).json({message: 'Updated Entry'})
        }else{
            res.status(404).json({message: 'Cupcake not found'});
        }
    })
    .catch(err => res.status(405).json({message: 'Validation Exception'}))

  
});

router.delete('/:cupcakeId', (req, res,next) => {
    const id = req.params.cupcakeId;
    Cupcakes.deleteOne({_id: id})
        .exec()
        .then(result => {
            if(result){
                res.status(200).json({message: 'Deleted Entry'})
            }else{
                res.status(404).json({message: 'Cupcake not found'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;