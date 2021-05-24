	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User',{
		id: {
			field: 'idUser',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			field: 'password',
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			field: 'username',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'user', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return User;
};
