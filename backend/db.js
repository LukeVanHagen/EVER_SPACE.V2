const mysql = require('mysql2/promise');
const redis = require('redis');

// Conexão com MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Conexão com o Redis
const redisClient = redis.createClient({
  host: 'redis', // Nome do serviço Redis no docker-compose
  port: 6379,
});

module.exports = { pool, redisClient };
