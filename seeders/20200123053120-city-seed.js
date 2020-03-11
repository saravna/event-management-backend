'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('cities', [{
        name: 'Coimbatore',
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Chennai',
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Erode',
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Banglore',
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Vellore',
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Hosur',
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Nagercoil',
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Trivandrun',
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Kanyakumari',
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Tirunelveli',
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Madurai',
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Pondichery',
        createdAt :new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
