export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('TypeError: Name must be a string');
    } if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('TypeError: Length must be a number');
    } if (Array.isArray(students)) {
      let allString = true;
      for (const student of students) {
        if (typeof student !== 'string') {
          allString = false;
        }
      }
      if (allString === true) {
        this._students = students;
      } else {
        throw new Error('TypeError: Students must be array of strings');
      }
    } else {
      throw new Error('TypeError: Students must be array of strings');
    }
  }

  // Getter method for _name
  get name() {
    return this._name;
  }

  // Getter method for _length
  get length() {
    return this._length;
  }

  // Getter method for _students
  get students() {
    return this._students;
  }

  // Setter method for _name
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('TypeError: Name must be a string');
    }
  }

  // Setter method for _length
  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('TypeError: Length must be a number');
    }
  }

  // Setter method for _students
  set students(students) {
    if (Array.isArray(students)) {
      let allString = true;
      for (const student of students) {
        if (typeof student !== 'string') {
          allString = false;
        }
      }
      if (allString === true) {
        this._students = students;
      } else {
        throw new Error('TypeError: Students must be array of strings');
      }
    } else {
      throw new Error('TypeError: Students must be array of strings');
    }
  }
}
