const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(cors());

const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

connectDb();

// Serve the static files from the Vite build
app.use(express.static(path.join(__dirname, 'frontend-dist')));

// API routes
app.use(express.json());
app.use('/api/users/',userRoutes);
app.use(errorHandler);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend-dist', 'index.html'));
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})