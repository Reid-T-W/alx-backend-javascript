const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = process.argv[2];
  try {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err !== null) {
        throw Error('Cannot load the database');
      }
      const fields = new Map();
      const students = data.split('\n');
      const columns = students.map((student) => student.split(','));
      let filterdStudents = columns.filter((student) => student[3] !== undefined);
      // Removing the header
      filterdStudents = filterdStudents.slice(1);
      // Filtering by field, using a hash map
      for (const student of filterdStudents) {
        if (!fields.has(student[3])) {
          fields.set(student[3], [student[0]]);
        } else {
          fields.get(student[3]).push(student[0]);
        }
      }
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${filterdStudents.length}\n`);
      // Formating the output
      for (const key of fields.keys()) {
        const value = fields.get(key);
        let printValue = '';
        for (const val of value) {
          printValue += `${val}, `;
        }
        res.write(`Number of students in ${key}: ${value.length}. List: ${printValue.slice(0, -2)}\n`);
      }
      res.end();
    });
  } catch (error) {
    res.statusCode(500);
    res.write(error);
    res.end();
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
