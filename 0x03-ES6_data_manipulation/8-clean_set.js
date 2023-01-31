export default function cleanSet(set, startString) {
  let newString = '';
  set.forEach((x) => {
    if (startString === '') {
      newString = `${newString}`;
    } else if (x.includes(startString)) {
      const cleanedString = x.replace(startString, '');
      if (newString === '') {
        newString = `${cleanedString}`;
      } else {
        newString = `${newString}-${cleanedString}`;
      }
    } else {
      newString = `${newString}`;
    }
  });
  return newString;
}
