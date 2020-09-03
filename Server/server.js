const express = require('express');
const cors = require('cors');
const db = require ('./db/config')
const { index, show, namePost, create} = require('./db/queries');

const server = express();
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

// get all posts route
server.get('/posts', (req, res) => {
    db.run(index)
        .then(resp => {
            const posts = resp.rows
            res.json({posts})
        })
        .catch(err => res.status(500).end())
})

//get posts by specific id route
server.get('/posts/:id', (req, res) => {
    db.run(show, [req.params.id])
        .then(resp => {
            const post = resp.rows
            res.json({post})
        })
        .catch(err => res.status(500).end())
})

//get posts by specific name route
server.get('/posts/name/:name', (req, res) => {
    db.run(namePost, [req.params.name])
        .then(resp => {
            const post = resp.rows
            res.json({post})
        })
        .catch(err => res.status(500).end())
})

// Create post route
server.post('/posts', (req, res) => {
  console.log(req.body)
    db.run(create, [req.body.name, req.body.title, req.body.content])
        .then(resp => {
            const post = resp.rows[0]
            res.status(201).json(post)
        })
        .catch(err => res.status(500).end())
})

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}!`))
