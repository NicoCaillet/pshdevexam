const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('players', {
  //   id:{
  //     type: DataTypes.INTEGER,
  //     autoIncrement:true,
  //     primaryKey: true,
  //     unique:false
  // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  score : {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
  });
};
