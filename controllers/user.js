import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import tryCatch from './utils/tryCatch.js';
import { createUser, getUserByEmail, getUsers, updateUser } from '../lib/users.js';

export const register = tryCatch(async (req, res) => {
  const { name, email, password } = req.body;
  if (password.length < 6)
    return res.status(400).json({
      success: false,
      message: 'Password must be 6 characters or more',
    });
  const emailLowerCase = email.toLowerCase();
//   const existedUser = await User.findOne({ email: emailLowerCase });
  const existedUser = await getUserByEmail(emailLowerCase)
  if (existedUser)
    return res
      .status(400)
      .json({ success: false, message: 'User already exists!' });
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await createUser({
    name,
    email: emailLowerCase,
    password: hashedPassword,
  });
  const {id} = user;
  const token = jwt.sign({ id, name, emailLowerCase }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });
  res.status(201).json({
    success: true,
    result: { id, name, email: user.email, token },
  });
});

export const login = tryCatch(async (req, res) => {
  const { email, password } = req.body;

  const emailLowerCase = email.toLowerCase();
  const existedUser = await getUserByEmail(emailLowerCase);
  
  if (!existedUser || !existedUser?.active)
    return res
      .status(404)
      .json({ success: false, message: 'User does not exist!' });
  const correctPassword = await bcrypt.compare(password, existedUser.password);
  if (!correctPassword)
    return res
      .status(400)
      .json({ success: false, message: 'Invalid credentials' });

  const { id, name, role } = existedUser;
  const token = jwt.sign({ id, name, emailLowerCase }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });
  res.status(200).json({
    success: true,
    result: { id, name, email: emailLowerCase, token, role },
  });
});

export const getAll = tryCatch(async (req, res) => {
  const users = await getUsers();
  res.status(200).json({ success: true, result: users });
});

export const updateStatus = tryCatch(async (req, res) => {
  // const { role, active } = req.body;
  await updateUser(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
