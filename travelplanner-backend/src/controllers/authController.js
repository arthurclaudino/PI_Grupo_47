import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function register(req, res) {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 8);

  try {
    const user = await prisma.user.create({
      data: { email, password: hashed }
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Erro ao criar usuário. Verifique os dados.' });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ error: 'Credenciais inválidas' });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.json({ token });
}
