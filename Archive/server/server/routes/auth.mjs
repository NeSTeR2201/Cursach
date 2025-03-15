const express = require('express');
const User = require('../models/User.mjs');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: 'Пользователь не найден' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Неверный пароль' });

  res.json({ message: 'Успешный вход', user: { username: user.username } });
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser  = new User({ username, password: hashedPassword });
  await newUser .save();

  res.status(201).json({ message: 'Пользователь зарегистрирован' });
});

module.exports = router;