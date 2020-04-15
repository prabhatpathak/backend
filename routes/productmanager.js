const Model = require('../models/product');

const router = require('express').Router()


router.post('/add', (req, res) => {
    data = req.body;

    let model = new Model(data);

    model.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


const multer= require('multer');
 
const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'./uploads/seller');
    },
    filename: (req,file,cb)=>{
        cb(null, file.originalname);
    }
});
 
const upload=multer({storage:storage})
router.post('/addimg',upload.single('image'),(req,res)=>{
    console.log(req.body);
    res.json({message:"File upload success"})
})

module.exports = router;