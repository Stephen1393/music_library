
const { migrate } = require('postgres-migrations');
const { loadEnvForAppMigrate } = require('./DB_helper_function');
const path = require('path')

loadEnvForAppMigrate()

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env 
 
const config = { 
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  port: parseInt(PGPORT),
  ensureDatabaseExists: true,
  defaultDatabase: 'postgres'
}

const migratePath =  path.join(__dirname, '../migrations')
 
const migrateDB = async (config) => {
 
  console.log('Migrating Database...')
  const output = await migrate(config, migratePath) 
 
  if (!output.length) {
    console.log('Database already up to date!')
  } else {
    console.log(output)
  }
}
 
migrateDB(config).catch(console.err);

