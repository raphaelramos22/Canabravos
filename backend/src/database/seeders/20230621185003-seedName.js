module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Member',
      [{
        id: 1,
        displayName: 'Raphael',
        instagram: 'https://www.instagram.com/rapharamos22/',
        maritalStatus: 'namorando',
        image: 'http://localhost:3008/images/Raphael.png',
      },
      {
        id: 2,
        displayName: 'FabioMel',
        instagram: 'https://www.instagram.com/fabiocorreap/',
        maritalStatus: 'namorando',
        image: 'http://localhost:3008/images/Fabio.png',
      },
      {
        id: 3,
        displayName: 'Vini',
        instagram: 'https://www.instagram.com/vinicorrea.a/',
        maritalStatus: 'solteiro',
        image: 'http://localhost:3008/images/Vini.png',
      },
      {
        id: 4,
        displayName: 'Lucão',
        instagram: 'https://www.instagram.com/lucasousa7/',
        maritalStatus: 'Namorando',
        image: 'http://localhost:3008/images/Lucas.png',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Member', null, {});
  },
};