"use strict";

module.exports = function(sequelize, DataTypes) {
	var History = sequelize.define("history", {
		body: DataTypes.TEXT,
		title: DataTypes.STRING,
		subTitle: DataTypes.STRING,
		category: DataTypes.STRING
		// photo: DataTypes.STRING
	}, {
		classMethods: {
			associate: (models) => {
				History.belongsTo(models.city);
				History.belongsTo(models.person);
			},
			withCityAndPerson: (params) => {
				let query = require('../services/query')(params);
				const City = require('../models').city
				const Person = require('../models').person
				query.include = [City, Person];
				return History.findAll(query);
			}
		}
	});
	return History;
};