// ---------------------------------------
// Task 1
// ---------------------------------------

interface Teacher { 
  [key: string]: any;
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// ---------------------------------------
// Task 2
// ---------------------------------------

interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// ---------------------------------------
// Task 3
// ---------------------------------------

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher(firstName: string, lastName: string): string {
  let firstLetter: string = firstName.charAt(0);
  return(`${firstLetter}.${lastName}`)
}

console.log(printTeacher("John", "Doe"));

// ---------------------------------------
// Task 4
// ---------------------------------------
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string): StudentClass {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export interface constructorInterface {
  new(firstName: string, lastName: string): StudentClassInterface;
}
