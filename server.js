const express = require('express');
const router = require('./routes/users');
const connectDB = require('./config/config');

const app = express();
// connect DB
connectDB();


//init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send({ msg: "contact keeper" }));

const PORT = process.env.PORT || 5000;
app.use(router);

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});