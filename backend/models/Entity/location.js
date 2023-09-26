const { DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const CityName=sequelize.define('locations',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        city:
        {
            type:DataTypes.STRING,
            primaryKey:true,
            allowNull:false,
            unique:true,

        }
    })
    return CityName;
}