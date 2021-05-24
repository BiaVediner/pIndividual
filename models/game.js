'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Game = sequelize.define('Game',{
		id: {
			field: 'idGame',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		name: {
			field: 'name',
			type: DataTypes.STRING,
			allowNull: false
		},
		difficulty: {
			field: 'difficulty',
			type: DataTypes.STRING,
			allowNull: false
		},
		points: {
			field: 'points',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'game', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Game;
};
