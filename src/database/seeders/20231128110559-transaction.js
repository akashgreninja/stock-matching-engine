module.exports = {  
  up: async (queryInterface, Sequelize) => {  
    return queryInterface.bulkInsert('Transactions', [{  
      buyOrderId: 1,  
      sellOrderId: 2,  
      quantity: 100,  
      price: 50.00,  
      timestamp: new Date(),  
      createdAt: new Date(),  
      updatedAt: new Date()  
    }], {});  
  },  
  
  down: async (queryInterface, Sequelize) => {  
    return queryInterface.bulkDelete('Transactions', null, {});  
  }  
};  
