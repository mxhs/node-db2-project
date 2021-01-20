const { table } = require("../db-config");

exports.up = function (knex) {
	return knex.schema.createTable("cars", (t) => {
		t.increments();
		t.string("VIN", 17).notNullable().unique();
		t.string("make").notNullable();
		t.string("model").notNullable();
		t.integer("mileage").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("cars");
};
