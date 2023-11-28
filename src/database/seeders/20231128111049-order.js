module.exports = {  
  up: async (queryInterface, Sequelize) => {  
    return queryInterface.bulkInsert('Orders', [{  
      userId: 1,  
      stockId: 1,  
      type: 'buy',  
      quantity: 100,  
      price: 50.00,  
      status: 'open',  
      placedAt: new Date(),  
      updatedAt: new Date()  
    }], {});  
  },  
  
  down: async (queryInterface, Sequelize) => {  
    return queryInterface.bulkDelete('Orders', null, {});  
  }  
};  
