const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOçDB_URI || 'mongodb://127.0.0.1:27017/paintingsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;