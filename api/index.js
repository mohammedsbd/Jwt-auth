// reuqire the express module
const express = require('express');
// create an express app
const app = express();
app.use(express.json()); // to parse JSON bodies

const user=[
    {
        id:1,
        username: 'John Doe',
        password: 'jhon0908',
        isAdmin: true,
      
    },

    {
        id:2,
        username: 'Jhane Doe',
        password: 'jhane0908',
        isAdmin: false,
      
    }
]
//post to api/login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});