export default function createInt8TypedArray(length, position, value) {
  // if (position >= length) {
  //  return Error('Position outside range');
  // }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);
  try {
    view.setInt8(position, value);
  } catch (e) {
    throw (Error('Position outside range'));
  }
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
