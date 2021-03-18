const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Linguagens = require('../models/Linguagens');
const Paradigmas = require('../models/Paradigmas');
const LinguagensAdd = require('../models/LinguagensAdd');

const connection = new Sequelize(dbConfig);

Linguagens.init(connection);
Paradigmas.init(connection);
LinguagensAdd.init(connection);


Linguagens.associate(connection.models);
Paradigmas.associate(connection.models);

module.exports = connection;