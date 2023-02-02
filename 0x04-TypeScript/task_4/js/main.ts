/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />

export const cpp = Subjects.Cpp;
export const java = Subjects.Java;
export const react = Subjects.React;
export const cTeacher: Subjects.Teacher = {
  firstName: 'Hanna', 
  lastName: 'Abera', 
  experienceTeachingC: 10
}

if (cTeacher.hasOwnProperty('experienceTeachingC')) {
  console.log('C++');
  const cpp1 = new cpp(cTeacher);
  console.log(cpp1.getRequirements());
  console.log(cpp1.getAvailableTeacher());
}
else if (cTeacher.hasOwnProperty('experienceTeachingJava')) {
  console.log('Java');
  const java1 = new java(cTeacher);
  console.log(java1.getRequirements());
  console.log(java1.getAvailableTeacher());
}
else {
  console.log('React');
  const react1 = new react(cTeacher);
  console.log(react1.getRequirements());
  console.log(react1.getAvailableTeacher());
}
