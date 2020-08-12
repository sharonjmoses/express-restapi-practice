import mongoose from 'mongoose';
import User from './user';
import Message from './message';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Message };

export { connectDb };

export default models;

// let users = {
//   1: {
//     id: '1',
//     username: 'MKS',
//   },
//   2: {
//     id: '2',
//     username: 'Dev',
//   },
// };

// let messages = {
//   1: {
//     id: '1',
//     text: 'Sample 1',
//     userId: '1',
//   },
//   2: {
//     id: '2',
//     text: 'Sample 2',
//     userId: '2',
//   },
// };

// export default {
//   users,
//   messages,
// };
