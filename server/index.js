const express = require('express');

const app = express();
const bp = require('body-parser');
const cors = require('cors');
const db = require('./db/queries.js');

app.use(cors(), bp.json());

app.get('/api/bugs', (req, res) => db.getAllBugs()
  .then((result) => res.send(result.rows))
  .catch(() => { res.sendStatus(400); }));

app.post('/api/bugs', (req, res) => db.addBug(req.body)
  .then(() => res.sendStatus(201))
  .catch(() => res.sendStatus(400)));

app.use((req, res) => {
  res.status(404).send('That route does not exist');
});

const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
