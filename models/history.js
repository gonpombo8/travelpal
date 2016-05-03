"use strict";

module.exports = function(sequelize, DataTypes) {
	var History = sequelize.define("history", {
		body: DataTypes.TEXT,
		title: DataTypes.STRING,
		subTitle: DataTypes.STRING,
		category: DataTypes.STRING
	}, {
		classMethods: {
			associate: (models) => {
				History.belongsTo(models.city);
				History.belongsTo(models.person);
				History.hasMany(models.picture);
			},
			withCityAndPerson: (params) => {
				let query = require('../services/query')(params);
				const City = require('../models').city
				const Person = require('../models').person
				const Picture = require('../models').picture
				query.include = [City, Person, Picture];
				return History.findAll(query).then(histories => {
					histories = JSON.parse(JSON.stringify(histories));
					return histories.map(history => {
						history.pictures = history.pictures.map(picture => picture.url);
						return history;
					});
				});
			}
		}
	});
	return History;
};