import { Pool } from 'pg'

export const pool = new Pool({
  user: 'postgres',
  password: '',
  host: 'localhost',
  database: 'pernstack',
  port: 5432
})
