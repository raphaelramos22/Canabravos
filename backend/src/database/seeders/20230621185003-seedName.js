module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Member',
      [{
        id: 1,
        displayName: 'Raphael',
        instagram: 'https://www.instagram.com/rapharamos22/',
        soccerTeam:'Flamengo',
        professions:'Desenvolvedor Web',
        maritalStatus: 'namorando',
        image: 'http://localhost:3008/images/Raphael.png',
      },
      {
        id: 2,
        displayName: 'FabioMel',
        instagram: 'https://www.instagram.com/fabiocorreap/',
        soccerTeam:'Vasco',
        professions:'Gerente de compras',
        maritalStatus: 'namorando',
        image: 'http://localhost:3008/images/Fabio.png',
      },
      {
        id: 3,
        displayName: 'Vini',
        instagram: 'https://www.instagram.com/vinicorrea.a/',
        soccerTeam:'Vasco',
        professions:'Gerente administrativo',
        maritalStatus: 'solteiro',
        image: 'http://localhost:3008/images/Vini.png',
      },
      {
        id: 4,
        displayName: 'Lucão',
        instagram: 'https://www.instagram.com/lucasousa7/',
        soccerTeam:'Flamengo',
        professions:'Empresário',
        maritalStatus: 'Namorando',
        image: 'http://localhost:3008/images/Lucas.png',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Member', null, {});
  },
};