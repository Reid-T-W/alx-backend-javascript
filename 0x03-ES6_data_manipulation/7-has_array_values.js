export default function hasValuesFromArray(set, array) {
  let exists = true;
  array.map((x) => {
    if (!set.has(x)) {
      exists = false;
    }
    // The return statement below is unecessary
    // Inserted to satisfy eslint requirements
    return false;
  });
  return exists;
}
