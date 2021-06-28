import express from 'express'
import cors from 'cors'
import { pool } from './database/database.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/todos', async (req, res) => {
  try {
    const allTodos = (await pool.query('SELECT * FROM todo')).rows
    res.json(allTodos)
  } catch (error) {
    console.error(error.message)
  }
})

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body
    const newTodo = (
      await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description])
    ).rows[0]

    res.json(newTodo)
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(5000, () => {
  console.log('Server is running in port 5000')
})
