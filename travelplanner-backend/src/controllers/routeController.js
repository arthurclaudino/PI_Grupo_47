import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function generateRoute(req, res) {
  const userId = req.user.userId;

  try {
    const preferences = await prisma.preference.findFirst({
      where: { userId },
    });

    if (!preferences) {
      return res.status(404).json({ error: 'Preferências não definidas' });
    }

    const content = `Roteiro para ${preferences.destination}, focado em ${preferences.interests}, com duração de ${preferences.duration} dias e orçamento de R$${preferences.budget}.`;

    const route = await prisma.route.create({
      data: {
        userId,
        destination: preferences.destination,
        duration: Number(preferences.duration),
        price: Number(preferences.budget),
        interests: preferences.interests,
        content,
      },
    });

    res.json([route]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar recomendação' });
  }
}
