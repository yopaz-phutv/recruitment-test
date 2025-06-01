import { pool } from "./db.js";

const createTable = `
CREATE TABLE IF NOT EXISTS jobs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`;

const insertData = `
INSERT INTO jobs (title, description) VALUES
('Lập trình viên Backend', 'Phát triển API cho hệ thống tuyển dụng'),
('Lập trình viên Frontend', 'Xây dựng UI bằng React'),
('Quản lý dự án', 'Điều phối các team và kiểm soát tiến độ');
`;

try {
  console.log("Seeding jobs data...");
  const conn = await pool.getConnection();
  await conn.query(createTable);
  await conn.query(insertData);
  console.log("Seeding jobs data successfully!");
  conn.release();
} catch (err) {
  console.error(err);
  process.exit(1);
} finally {
  process.exit(0);
}
