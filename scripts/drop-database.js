const { Client } = require('pg')
const { loadEnvForCreateDrop } = require('./DB_helper_function')


const dropDatabase = async () => {

  const database = loadEnvForCreateDrop()

  const validateDB = /^[A-Za-z_][A-Za-z0-9_]*$/
  if (!validateDB.test(database)) {
    throw new Error('Invalid database name')
  }

  const client = new Client({database: 'postgres'})

 try { 
  await client.connect()
  console.log('connecting to postgresSQL server...')

  await client.query(`DROP DATABASE IF EXISTS "${database}" WITH (FORCE)`)
  console.log(`database ${database} drop complete, or it didn't exist`)
 
     } finally {
      await client.end()
    }
 }


 dropDatabase().catch((err) => {
  console.error(err)
 });