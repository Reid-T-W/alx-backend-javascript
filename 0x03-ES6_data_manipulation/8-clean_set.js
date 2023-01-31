export default function cleanSet(set, startString) {
  let newString = '';
  if (startString === '') {
    newString = `${newString}`;
    return newString;
  }
  set.forEach((x) => {
    if (x.includes(startString)) {
      /* const cleanedString = x.replace(startString, '');
      if (newString === '') {
        newString = `${cleanedString}`;
      } else {
        newString = `${newString}-${cleanedString}`;
      } */
    }
  });
  return newString;
}
