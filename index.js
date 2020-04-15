const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
const cors = require('cors');
const utilRouter = require("./routes/util.js");

const userRouter = require('./routes/userManager');
const productRouter=require('./routes/productmanager');
const sellerRouter = require('./routes/sellerManager'); 
app.use(parser.json());
app.use(cors());
app.use('/product',productRouter);
app.use('/user', userRouter);
app.use('/util',utilRouter)
app.use('/seller',sellerRouter);
app.get('/', (req, res) => {
    res.send('get request accepted');
})

app.listen(port, () => {
    console.log('server started');
})