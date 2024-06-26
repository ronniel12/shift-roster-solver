const express = require('express');
const bodyParser = require('body-parser');
const Datastore = require('nedb');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new Datastore({ filename: 'database.db', autoload: true });

app.post('/api/employees', (req, res) => {
  const employee = req.body;
  db.insert(employee, (err, newDoc) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(newDoc);
    }
  });
});

app.get('/api/employees', (req, res) => {
  db.find({}, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});