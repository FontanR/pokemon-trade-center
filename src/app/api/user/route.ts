'use server'
import { connectToDb } from '@/lib/util';
import User from '@/lib/models/User';

export const create = async (userData: any) => {
  await connectToDb();
  const { email } = userData;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('This email is already in use, try another one');
      return null
    }
    const newUser = await User.create(userData);
    const newUserSaved = await newUser.save();
    console.log('User created');
    return newUserSaved;
  } catch (error) {
    console.error('Error details:', error);
    throw new Error('Error creating user');
  }
};

// export const list = async (req, res) => {
//   try {
//     connectToDb();
//     const result = await User.find();

//     if (!result.length) {
//       return res.status(404).json({
//         message: 'There are no users to show',
//         data: undefined,
//         error: true,
//       });
//     }
//     return res.status(200).json({
//       message: 'List of users',
//       data: result,
//       error: false,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: error.toString(),
//       data: undefined,
//       error: true,
//     });
//   }
// };

// export const findOne = async (req, res) => {
//   try {
//     connectToDb();
//     const { id } = req.query;
//     const result = await User.findOne({ _id: id });
//     if (!result) {
//       return res.status(404).json({
//         message: 'User was not found',
//         data: undefined,
//         error: true,
//       });
//     }
//     return res.status(200).json({
//       message: 'User found',
//       data: result,
//       error: false,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: error.toString(),
//       data: undefined,
//       error: true,
//     });
//   }
// };

// export const update = async (req, res) => {
//   try {
//     connectToDb();
//     const { id } = req.query;
//     const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

//     if (!updatedUser) {
//       return res.status(404).json({
//         message: 'User was not found',
//         data: undefined,
//         error: true,
//       });
//     }

//     return res.status(201).json({
//       message: 'User updated',
//       data: updatedUser,
//       error: false,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: error.toString(),
//       data: undefined,
//       error: true,
//     });
//   }
// };

// export const deleteItem = async (req, res) => {
//   try {
//     connectToDb();
//     const { id } = req.query;
//     const result = await User.deleteOne({ _id: id });
//     if (!result.deletedCount) {
//       return res.status(404).json({
//         message: 'User was not found',
//         data: undefined,
//         error: true,
//       });
//     }
//     return res.status(200).json({
//       message: 'User deleted',
//       data: result,
//       error: false,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: error.toString(),
//       data: undefined,
//       error: true,
//     });
//   }
// };