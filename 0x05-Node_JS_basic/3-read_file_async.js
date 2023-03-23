const { rejects } = require('assert');
const fs = require('fs');

function countStudents(path) {
  return (new Promise((resolve) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err !== null) {
        rejects(err);
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
      console.log(`Number of students: ${filterdStudents.length}`);
      // Formating the output
      for (const key of fields.keys()) {
        const value = fields.get(key);
        let printValue = '';
        for (const val of value) {
          printValue += `${val}, `;
        }
        console.log(`Number of students in ${key}: ${value.length}. List: ${printValue.slice(0, -2)}`);
      }
      resolve(data);
    });
  })
  );
}

module.exports = countStudents;
