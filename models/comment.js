module.exports = function(sequelize, DataTypes){
    var comments = sequelize.define("comment", {
        userId: {
            type:DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        spotId: {
            type:DataTypes.INTEGER
        }
    });
    return comments
}
