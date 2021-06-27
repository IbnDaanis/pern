import express from 'express'
import cors from 'cors'
import { pool } from './database/database'

const app = express()

app.use(cors)
app.use(express.json())

app.post('/todos', async (req, res) => {
  try {
    res.json(req.body)
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(5000, () => {
  console.log('Server is running in port 5000')
})
