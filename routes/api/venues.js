const express = require('express');
const router = express.Router();


//  Venue Model
const Venue = require('../../models/Venue');


// @Route GET api/items
// @desc GET All Items
// @access public
router.get('/', (req,res) =>{
    Venue.find()
    .sort({date: -1})
    .then(venues => res.json(venues))
})
// @route POST api/venues
// @desc Create an event
// @access public
router.post('/', (req, res) =>{
    const newVenue = new Venue({
        name: req.body.name,
        location: req.body.location,
        description: req.body.description
    })
    newVenue.save().then(venue => res.json(venue))
    .catch(err => res.status(400).json({message:err}))
})
// @route DELETE api/venues
// @desc delete a venue
// @access public
router.delete('/:id', (req, res) =>{
    Venue.findById(req.params.id)
    .then(venue => venue.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})


module.exports= router;