const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/AC';

const connectionString = 'mongodb://localhost:27017/AC';
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));


// Make All Models Available
module.exports = { 
    User: require('./User')
};
