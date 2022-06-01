import { BufferGeometry, Scene } from "three";
import { Geometry } from "three/examples/jsm/deprecated/Geometry";
import { MeshLine } from 'meshline';

export default class LineManager {
  public lineData?: Map<string, object>;
  public lineDetailData?: Map<string, object>

  appendLine() {

  }

  appendToScene(refScene: Scene, key: string) {
    // this.lineData?.forEach()
  }

  dispose() {

  }

  // meshLine 라이브러리의 라인 shape 선택
  makeMeshLine(geo: BufferGeometry, type: string) { // mashLine shape
    let g = new MeshLine();

    switch (type) {
      case 'linear':
        g.setGeometry(geo, (p) => (1 - p));
        break;
      case 'wavy':
        g.setGeometry(geo, (p) => 2 + Math.sin(50 * p));
        break;
      default:
        break;
    }
    return g;
  };
}