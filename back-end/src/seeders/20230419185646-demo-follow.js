'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Followers', [{
       follower_id: 1,
       followed_id: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       follower_id: 2,
       followed_id: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       follower_id: 3,
       followed_id: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Followers', null, {});
  }
};
