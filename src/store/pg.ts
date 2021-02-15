import createConnectionPool, { sql } from '@databases/pg';
// import { DATABASE_URL } from "../setting"

// N.B. you will need to replace this connection
// string with the correct string for your database.
const db = createConnectionPool(
  process.env.HEROKU_POSTGRESQL_COBALT_URL
);

 //db.dispose();
console.log(process.env.HEROKU_POSTGRESQL_COBALT_URL)
export { db, sql };