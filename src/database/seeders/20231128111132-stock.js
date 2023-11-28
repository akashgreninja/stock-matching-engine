module.exports = {  
  up: async (queryInterface, Sequelize) => {  
    return queryInterface.bulkInsert('Stocks', [{  
      ticker: 'AAPL',  
      name: 'Apple Inc.',  
      currentPrice: 150.00,  
      updatedAt: new Date()  
    }, {  
      ticker: 'GOOG',  
      name: 'Google Inc.',  
      currentPrice: 2800.00,  
      updatedAt: new Date()  
    }], {});  
  },  
  
  down: async (queryInterface, Sequelize) => {  
    return queryInterface.bulkDelete('Stocks', null, {});  
  }  
};  
