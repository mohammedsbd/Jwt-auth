// reuqire the express module
const express = require('express');
// create an express app
const app = express();

const user=[
    {
        id:1,
        username: 'John Doe',
        password: 'jhon0908',
        isAdmin: true,
      
    }
]

// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});