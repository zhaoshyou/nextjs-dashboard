import { NextResponse } from 'next/server'
const mysql = require('mysql2/promise')
 
// 创建全局的 MySQL 连接池
const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1', // 服务器地址
  user: 'root',
  password: 'zsy20050711', // 密码
  database: 'db-1',
})
 
export async function GET(request) {
  try {
    // 从连接池中获取连接
    const connection = await pool.getConnection()
 
    // 执行 MySQL 查询
    const [rows, fields] = await connection.query('SELECT * FROM jacksonblogbacked')
 
    // 释放连接回连接池
    connection.release()
 
    return NextResponse.json({ data: rows }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}