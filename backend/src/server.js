require('dotenv').config();
const app = require('./app');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Nature Scope Backend API server running on port ${PORT}`);
  logger.info(`Health check available at http://localhost:${PORT}/api/health`);
});
