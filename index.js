const express = require('express')
const mongoose = require('mongoose');
// const Product = require('./models/product.model.js'); 
const app = express()


app.use(express.json());


app.get('/', (req,res) => {
    res.send("Hello from node API Server");
});


app.post('/api/products', async(req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.post('/api/products', async(req, res) => {
    try{
        // const product = await Product.create(req.body);
        // res.status(200).json(product); 
    }catch (error) {
        // res.status(500).json({message: error.message});
    }
});

// mongodb
mongoose.connect("mongodb+srv://gunalsoftware:XlP6x7pUXBn3VRg6@backenddb.chzouvr.mongodb.net/Node API")
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log('Connection Failed!');
});