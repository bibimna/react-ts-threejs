import { Group, Mesh, Object3D, Scene } from "three";
// import CommonUtils from "./CommonManager";

export default class ModelManager {
  modelData: Map<string, Object3D>;

  constructor() {
    this.modelData = new Map<string, Object3D | Mesh | Group>();
  }

  // scene 에 append
  appendToScene = (refScene: Scene) => {
    this.modelData.forEach((obj) => {
      if (refScene.children.indexOf(obj) === -1) {
        refScene.add(obj);
      }
    });
  };

  removeToScene = (refScene: Scene) => {
    const keys = Object.keys(this.modelData);

    keys.forEach((key, index) => {
      const obj = this.modelData.get(key);

      // CommonUtils.disposeObject(obj, () => {
      //
      // })

      if(index === keys.length - 1) {
        this.modelData.clear();
      }
    });

  }

}