export default function (students) {
  const initialVal = 0;
  const idSum = students.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, initialVal,
  );
  return idSum;
}
