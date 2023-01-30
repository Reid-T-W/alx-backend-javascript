export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    return Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  // int8View.set(value, position);
  int8View[position] = value;
  return buffer;
}
