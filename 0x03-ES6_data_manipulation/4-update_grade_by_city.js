export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityFiltStudents = students.filter((x) => (x.location === city));
  const newGradeStudents = cityFiltStudents.map((x) => {
    const compiled = newGrades.filter((y) => (y.studentId === x.id));
    const z = x;
    // Checking if the array is empty
    if (compiled.length !== 0) {
      z.grade = compiled[0].grade;
    } else {
      z.grade = 'N/A';
    }
    return (z);
  });
  return (newGradeStudents);
}
