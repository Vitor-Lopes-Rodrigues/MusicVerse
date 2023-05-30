'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
       name: "Pedro Paulo",
       image: "teste.jpg",
       birth_date: "2002-09-09",
       gender: "Male",
       cpf: "48668817809",
       rg: "395030493",
       email: "pedro.paulo@gmail.com",
       password: "123",
       phone: "11973209920",
       cep: "06180000",
       street: "Rua general",
       city: "Osasco",
       state: "SP",
       country: "Brasil",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "José Alvo",
       image: "teste.jpg",
       birth_date: "2002-09-09",
       gender: "Male",
       cpf: "48668817809",
       rg: "395030493",
       email: "jose.alvo@gmail.com",
       password: "123",
       phone: "11973209920",
       cep: "06180000",
       street: "Rua general",
       city: "Osasco",
       state: "SP",
       country: "Brasil",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Ruan Marito",
       image: "teste.jpg",
       birth_date: "2002-09-09",
       gender: "Male",
       cpf: "48668817809",
       rg: "395030493",
       email: "ruan.marito@gmail.com",
       password: "123",
       phone: "11973209920",
       cep: "06180000",
       street: "Rua general",
       city: "Osasco",
       state: "SP",
       country: "Brasil",
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
