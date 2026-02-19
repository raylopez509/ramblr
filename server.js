import express from 'express'
import cors from 'cors'
import { Pool } from 'pg'
import 'dotenv/config'


const app = express()
app.use(cors());
app.use(express.json());

const port = 3000

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
})

app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY date_created DESC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
})

app.post('/create', async (req, res) => {
  const { title, content, tags, owner } = req.body;
  const query = `INSERT INTO posts (title, content, tags, date_created, owner) VALUES
   ($1, $2, $3, CURRENT_TIMESTAMP, $4)`
  const values = [title, content, tags, owner];
  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/delete', async (req, res) => {
  const { ids } = req.body;
  if(!ids || !Array.isArray(ids)) {
    res.status(400).json({ error: 'array is required' });
  }
  const query = 'DELETE FROM posts WHERE post_id = ANY($1)'
  try {
    const result = await pool.query(query, [ids]);
    res.json({ message: 'Deleted successfully', count: result.rowCount, deleted: result.rows })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/update', async (req, res) => {
  const { id, title, content, tags, owner } = req.body;
  const query = `UPDATE posts SET title = $2, content = $3, tags = $4, owner = $5 WHERE post_id = $1`;
  const values = [id, title, content, tags, owner];
  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }  
})

app.get('/post', async (req, res) => {
  const id = req.query.id
  const query = `SELECT * FROM posts WHERE post_id = ${id}`;
  const values = [id];
  try {
    const result = await pool.query(query, values);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})


