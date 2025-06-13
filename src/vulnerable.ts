// vulnerable.ts

import express, { Request, Response } from 'express';
import mysql from 'mysql';

const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'example_db'
});

app.get('/user', (req: Request, res: Response) => {
  const userId = req.query.id;

  // ❌ Vulnerable: Directly using user input in SQL query
  const query = `SELECT * FROM users WHERE id = '${userId}'`;

  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send('Database error');
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
