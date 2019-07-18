module.exports = function(sequelize, DataTypes){
    var Task = sequelize.define("Task", {
        taskItem: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER
        }
    });

    return Task
}