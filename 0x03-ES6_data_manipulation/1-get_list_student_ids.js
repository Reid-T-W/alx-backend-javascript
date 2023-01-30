export default function getListStudentIds(objsArray) {
  if (Array.isArray(objsArray) !== true) {
    return [];
  }
  const ids = objsArray.map((x) => x.id);
  return ids;
}
