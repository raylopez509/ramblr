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
  port: process.env.PG_US,
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

console.log(process.env.PG_USER);

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})


