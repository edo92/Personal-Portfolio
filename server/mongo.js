const mongoose = require('mongoose');

module.exports = () => {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/hamsterpost';

    mongoose.set('useCreateIndex', true);

    const mdbConfig = {
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    };
    
    mongoose.connect( MONGODB_URI, mdbConfig );
    mongoose.connection.once('open',() =>{
      console.log('mongoose connection successful');
    }); 
};