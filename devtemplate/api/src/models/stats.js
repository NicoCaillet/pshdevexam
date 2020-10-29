const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('stats', {
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
      
    });
  };