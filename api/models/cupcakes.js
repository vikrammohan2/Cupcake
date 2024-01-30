const mongoose = require('mongoose');

const cupcakeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    price: Number,
    ingredients: [{
        type: String
    }]
});

module.exports = mongoose.model('Cupcakes', cupcakeSchema);