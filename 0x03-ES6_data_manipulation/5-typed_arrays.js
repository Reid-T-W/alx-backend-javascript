export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    return Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);

  view.setInt8(position, value);
  return view;

  // const int8View = new Int8Array(buffer);
  // int8View[position] = value;
  // return {
  //  DataView: {
  //    byteLength: length,
  //    byteOffset: 0,
  //    buffer,
  //  },
  // };
}
