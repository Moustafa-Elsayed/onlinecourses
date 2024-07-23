// app.js
const express = require('express');
const logger = require('./middlewares/logger');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Use logger middleware
app.use(logger);

// Use data routes
app.use('/api', dataRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
