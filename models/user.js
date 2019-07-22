module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER
        },
        bio: {
            type: DataTypes.TEXT
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
        },
        socialmedia: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        }
    });

    return User
}
