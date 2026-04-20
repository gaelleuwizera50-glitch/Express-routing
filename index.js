const express = require('express');

const app = express();

app.get('/', (request , response) =>{
    response.send('This is the about page');
})
app.get('/profile', (request , response) =>{
    response.send('This is the profile page');
    
});

app.get('users/:id', (req, res) => {
    const userID = req.params.id;
    res.send(`User ID: ${userID}`);
})
app.get('/search', (req, res) => {
    const query =req.query.keyword;
    res.send(`Search keyword: ${query}`);

    // http://localhost:3000/Search?keyword=Kampala.....what to type when searching in the engine
})
app.get("/api/products", (req,res) => {
    const users = [
        {id:1,name:'Alice'},
        {id:2,name:'Bob'},
        {id:3,name:'Charlie'}
    ];
res.json(users);


});
const PORT =3000;

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})

