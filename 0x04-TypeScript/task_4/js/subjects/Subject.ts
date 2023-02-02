/// <reference path="./Teacher.ts" />
namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;
    constructor(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }

    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  } 
}
