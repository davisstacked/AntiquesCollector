const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/AC';

mongoose
	.connect(MONGODB_URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log('MongoDB connected successfully on ', MONGODB_URL))
	.catch((err) => console.log(`MongoDB connection error: ${err}`));

// Make All Models Available
module.exports = {
	User: require('./User'),
};
