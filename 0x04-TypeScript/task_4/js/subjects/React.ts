/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  class React extends Subjects.Subject {
    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() {
      if (this.teacher.experienceTeachingReact !== undefined)
        return `Available Teacher: ${this.teacher.firstName}`;
      else {
        return 'No available teacher';
      }
    }
  }
}
