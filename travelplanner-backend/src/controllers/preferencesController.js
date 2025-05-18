import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getPreferences(req, res) {
  const userId = req.user.userId;

  try {
    const preference = await prisma.preference.findFirst({
      where: { userId },
    });

    if (!preference) {
      return res.status(404).json({ error: 'Nenhuma preferência encontrada' });
    }

    res.json(preference);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar preferências' });
  }
}

export async function savePreferences(req, res) {
  const userId = req.user.userId;
  const { destination, budget, duration, interests } = req.body;

  try {
    const preference = await prisma.preference.upsert({
      where: { userId },
      update: {
        destination,
        budget: parseInt(budget),    
        duration: parseInt(duration),
        interests,
      },
      create: {
        userId,
        destination,
        budget: parseInt(budget),   
        duration: parseInt(duration),
        interests,
      },
    });

    res.status(201).json(preference);
  } catch (error) {
    console.error('Erro detalhado:', error);
    res.status(500).json({ error: 'Erro ao salvar preferências' });
  }
}
