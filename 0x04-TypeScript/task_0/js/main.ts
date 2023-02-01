interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Selam',
  lastName: 'Firkru',
  age: 10,
  location: 'Addis Ababa',
}

const student2: Student = {
  firstName: 'Hanna',
  lastName: 'Abebe',
  age: 20,
  location: 'Adama',
}

const studentList = [student1, student2];

  function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (let value of Object.values(element)) {
            let cell = row.insertCell();
            let text = document.createTextNode(value);
            cell.appendChild(text);
        }
    }
  }
  
  let table = document.createElement('table');
  document.body.appendChild(table);
  data = Object.keys(studentList[0]);
  generateTable(table, studentList);
  generateTableHead(table, data);
