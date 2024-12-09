import express from 'express';
import payload from 'payload';
import { config } from 'dotenv';
import path from 'path';

config();

const app = express();

// Serve uploaded files
app.use('/media', express.static(path.resolve(__dirname, '../../media')));

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// API endpoints
app.get('/api/products', async (req, res) => {
  try {
    const products = await payload.find({
      collection: 'products',
      depth: 2,
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.get('/api/consultation-types', async (req, res) => {
  try {
    const types = await payload.find({
      collection: 'consultation-types',
    });
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch consultation types' });
  }
});

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

app.listen(3000, async () => {
  payload.logger.info(`Server listening on port 3000`);
});