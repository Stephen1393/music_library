const { Client } = require('pg');
const { loadEnvForCreateDrop } = require('./helper_function')

const createDatabase = async () => { 

    const database = loadEnvForCreateDrop()

     const validateDB = /^[A-Za-z_][A-Za-z0-9_]*$/

    if (!validateDB.test(database)) {
        throw new Error('Invalid database name!')
    }

    const client = new Client()

try {
    await client.connect()
    console.log(`creating database ${database}...`)

    await client.query(`CREATE DATABASE "${database}"`)
    console.log(`database ${database} created!`)

    } catch (err) {
        if (err.code === '42P04') {
            console.log("database already exists!")
        }
        else {
            console.log(err)
        }
    } finally {
        await client.end()
    }
}

const tryDatabase = async () => {
  try {
    await createDatabase() 
  } catch (err) {
    console.log(err)
  }
}

tryDatabase()