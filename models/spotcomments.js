module.exports = function(sequelize, DataTypes){
    var Spotcomment = sequelize.define("Spotcomment", {
        commentId: {
            type: DataTypes.STRING
        },
        spotId: {
            type: DataTypes.INTEGER
        },
    });
    return Spotcomment
}
