// reuqire the express module
const express = require('express');
//reurie jwt
const jwt = require('jsonwebtoken');
// create an express app
const app = express();
app.use(express.json()); // to parse JSON bodies if we dont use this we cannot send any request on body in postman


const users=[
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
    const user=users.find(u=>{
        return u.username===username && u.password===password;
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// reuqire the express module
const express = require('express');
//reurie jwt
const jwt = require('jsonwebtoken');
// create an express app
const app = express();
app.use(express.json()); // to parse JSON bodies if we dont use this we cannot send any request on body in postman


const users=[
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
    const user=users.find(u=>{
        return u.username===username && u.password===password;
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// reuqire the express module
const express = require('express');
//reurie jwt
const jwt = require('jsonwebtoken');
// create an express app
const app = express();
app.use(express.json()); // to parse JSON bodies if we dont use this we cannot send any request on body in postman


const users=[
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
    const user=users.find(u=>{
        return u.username===username && u.password===password;
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// reuqire the express module
const express = require('express');
//reurie jwt
const jwt = require('jsonwebtoken');
// create an express app
const app = express();
app.use(express.json()); // to parse JSON bodies if we dont use this we cannot send any request on body in postman


const users=[
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
    const user=users.find(u=>{
        return u.username===username && u.password===password;
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// reuqire the express module
const express = require('express');
//reurie jwt
const jwt = require('jsonwebtoken');
// create an express app
const app = express();
app.use(express.json()); // to parse JSON bodies if we dont use this we cannot send any request on body in postman


const users=[
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
    const user=users.find(u=>{
        return u.username===username && u.password===password;
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// reuqire the express module
const express = require('express');
//reurie jwt
const jwt = require('jsonwebtoken');
// create an express app
const app = express();
app.use(express.json()); // to parse JSON bodies if we dont use this we cannot send any request on body in postman


const users=[
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
    const user=users.find(u=>{
        return u.username===username && u.password===password;
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// reuqire the express module
const express = require('express');
//reurie jwt
const jwt = require('jsonwebtoken');
// create an express app
const app = express();
app.use(express.json()); // to parse JSON bodies if we dont use this we cannot send any request on body in postman


const users=[
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
    const user=users.find(u=>{
        return u.username===username && u.password===password;
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// reuqire the express module
const express = require('express');
//reurie jwt
const jwt = require('jsonwebtoken');
// create an express app
const app = express();
app.use(express.json()); // to parse JSON bodies if we dont use this we cannot send any request on body in postman


const users=[
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
    const user=users.find(u=>{
        return u.username===username && u.password===password;
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const jwt = require('jsonwebtoken');
// create an express app
const app = express();
app.use(express.json()); // to parse JSON bodies if we dont use this we cannot send any request on body in postman


const users=[
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
    const user=users.find(u=>{
        return u.username===username && u.password===password;
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
        isAdmin: false,
      
    }
]
//post to api/login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user=users.find(u=>{
        return u.username===username && u.password===password;
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    if(user){
       //generate access token
       const accessToken=jwt.sign({id:user.id, isAdmin:user.isAdmin}, "mysecretkey")
       res.json({
          username: user.username,
            isAdmin: user.isAdmin,
           accessToken
       });
    }
    else{
        res.status(401).json({message: 'Invalid username or password'});
    }
   
});
// listen
const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});