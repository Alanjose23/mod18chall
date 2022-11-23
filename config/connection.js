const { connect, connection } = require('mongoose');

// create connection to mongo db
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetwork_db';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
