'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('linguagens_paradigmas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      linguagens_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model:'linguagens', key:'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      },
      paradigmas_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'paradigmas', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },  
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('linguagens_paradigmas');
  }
};