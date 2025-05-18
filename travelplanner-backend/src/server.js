import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import preferencesRoutes from './routes/preferencesRoutes.js';
import routeRoutes from './routes/routeRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/preferences', preferencesRoutes);
app.use('/api/routes', routeRoutes);

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
