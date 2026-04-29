const express = require('express');
const connectDB = require('./db');

require("dotenv").config()

const app = express();

// Middleware :Middleware are supposed to be positioned before the routes

app.use((req, res, next ) => {
    console.log (`${req.method} ${req.url}`);
    next();
})
// In this case middleware is able ro read json request bodies
app.use(express.json());

// Get is the http method
app.get('/', (request, response) => {
    response.send('Welcome to my API');
})

app.get('/about', (req, res) => {
    res.send('This is the about page')
})


// app.get('/profile', (request , response) =>{
//     response.send('This is the profile page');
    
// });

app.get('users/:id', (req, res) => {
    const userID = req.params.id;
    res.send(`User ID: ${userID}`);
})

app.get('/search', (req, res) => {
    const query = req.query.keyword;

    res.send(`Search keyword: ${query}`);

    // http://localhost:3000/Search?keyword=Kampala.....what to type when searching in the engine
})

// Json responses
app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'}
    ];
res.json(users);
});


// POST http mtd
app.post('/api/users', (req, res) => {
const newUser = req.body;
console.log('Received user data', newUser);

})

app.post('/api/tasks', (req, res) => {
    const newTask = req.body;
    console.log('Received user data:', newTask);
    res.status(201).json({
        message: 'Task created successfully',
        user: newTask
    })
    app.use(express.json());

})
  const PORT = process.env.PORT

  
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})

connectDB();