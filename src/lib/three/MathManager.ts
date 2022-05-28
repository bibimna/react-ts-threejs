import { Vector3, Quaternion } from "three";


// Vector 관련한 math 함수
export function sub(a: Vector3, b: Vector3) {
  const v = new Vector3();

  v.x = a.x - b.x;
  v.y = a.y - b.y;
  v.z = a.z - b.z;

  return v;
}

export function add(a: Vector3, b: Vector3) {
  const v = new Vector3();

  v.x = a.x + b.x;
  v.y = a.y + b.y;
  v.z = a.z + b.z;

  return v;
}

export function multiplyScalar(a: Vector3, b: number) {
  const v = new Vector3();

  v.x = a.x * b;
  v.y = a.y * b;
  v.z = a.z * b;

  return v;
}

export function applyAxisAngle(vVector: Vector3, vAxis: Vector3, fAngle: number) {
  const quaternion = new Quaternion();
  const v = new Vector3(vVector.x, vVector.y, vVector.z);

  v.applyQuaternion(quaternion.setFromAxisAngle(vAxis, fAngle));

  return v;
}
