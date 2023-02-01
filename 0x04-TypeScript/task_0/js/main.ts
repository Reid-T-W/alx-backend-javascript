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

function generateTable(table: any, data: any) {
  for (let element of data) {
    let row = table.insertRow();
    let key: string;
    let keys: Array<string> = Object.keys(element);
    for (key of keys) {
      let cell = row.insertCell();
      if (key !== 'lastName' && key !== 'age') {
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
}

let table = document.createElement('table');
document.body.appendChild(table);
generateTable(table, studentList);
