import express from 'express';
import { pool } from './db.js';

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM jobs');
  res.send(`
    <h2>Danh sách việc làm</h2>
    <table border="1">
      <tr><th>ID</th><th>Tiêu đề</th><th>Mô tả</th></tr>
      ${rows.map(job => `
        <tr>
          <td>${job.id}</td>
          <td>${job.title}</td>
          <td>${job.description}</td>
        </tr>`).join('')}
    </table>
  `);
});

app.listen(PORT, () => console.log('Server is listening for requests....'));
