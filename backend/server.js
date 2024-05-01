const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

connectDb();

app.use(express.json());
app.use('/api/users/',userRoutes);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})