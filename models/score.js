'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Score = sequelize.define('Score',{
		user_id: {
      field: 'fkUser',
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
		game_id: {
      field: 'fkGame',
      type: DataTypes.INTEGER,
      references: {
        model: 'game',
        key: 'id'
      }
    },
    score: {
			field: 'score',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
	}, 
	{
		tableName: 'score', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Score;
};
