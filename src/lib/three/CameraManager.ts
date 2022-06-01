import { Camera, OrthographicCamera, PerspectiveCamera, Vector3 } from "three";

export enum CameraType {
  Perspective = 'PerspectiveCamera',
  OrthoGraphic = 'OrthoGrapicCamera'
}

export interface CameraOption {
  width: number,
  height: number,
  type?: CameraType,
  near?: number,
  far?: number,
  viewAngle?: number

}

const cameraOptionDefaults = {
  type: CameraType.Perspective,
  near: 1,
  far: 10000,
  viewAngle: 25

}

export default class CameraManager {
  camera?: Camera;

  createCamera(options: CameraOption) {
    options = Object.assign({}, cameraOptionDefaults, options);
    const { width, height, type, near, far, viewAngle } = options;
    let camera;

    switch (type) {
      case CameraType.Perspective:
        const aspect = width / height;
        camera = new PerspectiveCamera(viewAngle, aspect, near, far);
        break;
      case CameraType.OrthoGraphic:
        camera = new OrthographicCamera(-width / 2, width / 2, -height / 2, width / 2, near, far);
        break;
      default:
        break;
    }

    this.camera = camera
  }

  initCamera(position?: Vector3, lookPos?: Vector3) {
    if(position) this.camera?.position.set(position.x, position.y, position.z);
    if(lookPos) this.camera?.lookAt(lookPos);
  }
}