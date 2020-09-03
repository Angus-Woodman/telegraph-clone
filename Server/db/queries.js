const index = `SELECT * FROM posts`;
const show = `SELECT * FROM posts WHERE id = $1`;
const namePost = `SELECT * FROM posts WHERE name = $1`;
const create = `INSERT INTO posts (name, title, content) VALUES ($1, $2, $3) RETURNING *`;

module.exports = { index, show, namePost, create }
