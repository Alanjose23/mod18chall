const connection = require('../config/connection');
const { Thought, User } = require('../models');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
await User.collection.deleteMany({});
// new users
  const newUsers = [{
    username: 'PRESSUREBUILDS DIAMONS!',
    email: "whydoieventry@gmail.com",
    thoughts: ['i love people', 'why do people not love me back', 'i like lexicons'],

  },
  {
    username: "Wnoon",
    email: "Ilovebuffpeople@gmail.com",
    thoughts: ['I love buff people', 'why do buff people not like me back', "i like muscles"],
  },
  {
    username: "evilman1",
    email: "ilovebeingevil@hell.com",
    thoughts: ['evil people need love', 'why do i even try'],


  }



]

  // insert users to collection
  await User.collection.insertMany(newUsers);

// console table information
  console.table(newUsers);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
