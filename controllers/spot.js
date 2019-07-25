
exports.addSpot = (req,res) => {
    req.context.db.Spot.create({
        address: req.body.address,
        // userId: ,
        image: req.body.image,
        besttime: req.body.besttime,
        description: req.body.description
}).then(function(result){
    let ID = result.id
    res.redirect('/user/spot/' + ID);
})};