const express = require ('express');
const router = express.Router();    

const player = require('../models/player');

router.get('/data',(req,res) => {

    player.find({ })
        .then((data) => {
            console.log('DATA :' , data)
            res.json(data);
        })
        .catch((error) => {
            console.log("Error", error)
        })
    
});

router.post('/data/save',(req,res) =>{
    console.log('Body : ' , req.body );

    const data = req.body;
    const newPlayer = new player(data);
    newPlayer.save((error) => {
        if(error){
            res.status().json({msg: 'Sorry, internal error'});
        }
        else{
            res.json({
                msg : 'Recieved data from Client'
            });
        }
    });



});



module.exports = router;  