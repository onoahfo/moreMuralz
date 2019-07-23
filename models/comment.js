module.exports = function(sequelize, DataTypes){
    var Comment = sequelize.define("Comment", {
        userId: {
            type:DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    });
    return Comment
}
