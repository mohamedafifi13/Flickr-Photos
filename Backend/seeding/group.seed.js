const mongoose = require('mongoose');
const { join } = require('path');
const Group = require('../components/Group/groupModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

const group = new Group({
  _id: mongoose.Types.ObjectId('111111111111111111111111'),
  name: 'testing',
});

// async function connect() {
//   await mongoose
//     .connect(process.env.MONGO_URI_CLOUD,
//       { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 50000 });
// }

async function groupSeed() {
  if (await Group.findOne()) await Group.collection.drop();
  await group.save();
}
async function seedGroup() {
  // await connect();
  await groupSeed();
  // await mongoose.disconnect();
}

module.exports = seedGroup;
