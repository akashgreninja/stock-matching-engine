module.exports = {  
  up: async (queryInterface, Sequelize) => {  
    return queryInterface.bulkInsert('user', [{  
   
      email: 'test@example.com',  
      gender: 'male',  
      phone: '1234567890',  
      firebaseId: 'firebase1',  
      firstName: 'John',  
      middleName: 'Doe',  
      lastName: 'Smith',  
      emailVerified: false,  
      phoneVerified: false,  
      country: 'USA',  
      state: 'California',  
      referralCode: 'refcode1',  
      investedAmount: 0,  
      realizedAmount: 0,  
      profilePicture: 'profilepic.jpg',  
      referrer: 1,  
      currency: 'USD',  
      role: 'admin',  
      isActive: true,  
      isDeleted: false,  
      isKycDone: false,  
      lockBookId: 'lockbook1',  
      mainBookId: 'mainbook1',  
      book: {  
        lock: null,  
        main: null,  
        short: null,  
      },  
      metadata: {},  
      createdAt: new Date(),  
      updatedAt: new Date()  
    }], {});  
  },  
  
  down: async (queryInterface, Sequelize) => {  
    return queryInterface.bulkDelete('user', null, {});  
  }  
};  
