'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        title: "Tocando trompete no Rio de janeiro...",
        description: "Após anos de espera, pude realizar o sonho de visitar o rio de janeiro.",
        image: "imagem_trompete.jpg",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comprei uma guitarra nova...",
        description: "Após anos de espera, pude comprar uma guitarra nova.",
        image: "imagem_guitarra.jpg",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Quero vender esse teclado...",
        description: "Após anos de espera, gostaria de vender esse teclado novinho.",
        image: "imagem_teclado.jpg",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
