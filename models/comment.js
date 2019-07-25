module.exports = function(sequelize, DataTypes){
    var comment = sequelize.define("comment", {
        userId: {
            type:DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        }
    });
    return comment
}
