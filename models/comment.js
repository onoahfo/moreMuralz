module.exports = function(sequelize, DataTypes){
    var Comment = sequelize.define("comment", {
        userId: {
            type:DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        }
    });
    return Comment
}
