import {BufferGeometry, Scene} from "three";
import MeshLine from 'meshline';
import {Geometry} from "three/examples/jsm/deprecated/Geometry";

class LineManager {
  private lineData: Map<string, object> | undefined;
  private lineDetailData: Map<string, object> | undefined

  appendLine() {

  }

  appendToScene(refScene: Scene, key: string) {
    // this.lineData?.forEach()
  }

  // meshLine 라이브러리의 라인 shape 선택
  makeMeshLine = (geo: BufferGeometry, type: string) => { // mashLine shape
    let g = new MeshLine.MeshLine();

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