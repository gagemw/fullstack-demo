// create db
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bugreporting',
  password: 'gagedb',
  port: '5432',
});

const getAllBugs = () => pool.query('SELECT * FROM bugs')
  .then((result) => result)
  .catch((error) => console.error(error));

const addBug = (bug) => pool.query('INSERT INTO bugs ("bugDescription","reportedBy","assignedTo","threatLevel") VALUES ($1,$2,$3,$4)', [bug.bugDescription, bug.reportedBy, bug.assignedTo, bug.threatLevel])
  .then((result) => result)
  .catch((error) => console.error(error));

module.exports = {
  getAllBugs,
  addBug,
};
