import { LayoutInfo, SceneInfo } from "./Interface3D";
import { Tween, removeAll } from "@tweenjs/tween.js";
import { MeshBasicMaterial, Object3D, BufferGeometry } from "three";
import { ModelManager, LineManager, ParticleManager } from "../../../../lib/three";

interface LoadStatus {
  isLoaded: number,
  isBGLoaded: number,
  isModelLoaded: number,
  isLineLoaded: number
}

export default class Sphere {
  layoutInfo?: LayoutInfo;
  sceneInfo?: SceneInfo;
  isRendering: boolean;

  modelManager: ModelManager;
  lineManager: LineManager;
  particleManager: ParticleManager;

  // load 체크 status
  loadStatus: LoadStatus;

  constructor(layoutInfo: LayoutInfo, sceneInfo: SceneInfo) {
    this.layoutInfo = layoutInfo;
    this.sceneInfo = sceneInfo;

    // 3D 오브젝트 관리(append, dispose)
    this.modelManager = new ModelManager();
    this.lineManager = new LineManager();
    this.particleManager = new ParticleManager();

    this.isRendering = false;

    this.loadStatus = {
      isLoaded: 0,
      isBGLoaded: 0,
      isModelLoaded: 0,
      isLineLoaded: 0
    };

    this.appendModel();
  }

  appendModel = () => {
    // 원형 구 appenr

    // 파이그래프 append

    // 라인 append
  }

  appendSphere = () => {

  }

  appendPieGraph = () => {
    const width = this.layoutInfo?.container?.offsetWidth || 1920;
    const height = this.layoutInfo?.container?.offsetHeight || 1080;

    const fStart = Math.PI * 0.25;
    const fEnd = Math.PI * 0.75;
    const fInnerRadius = 30;
    const fOutterRadius = 36;

    const fTotalRate = fEnd - fStart;
    let fCurrentRate = fStart;

    const pieScale = 12 * (height / 1080);
    const geometry = new BufferGeometry();
    const material = new MeshBasicMaterial();
  }

  appendLine = () => {

  }

  // object 종류별 manager 를 통해 append
  appendToScene = () => {

  }

  // object 종류별 manager 를 통해 dispose
  dispose = () => {

  }

  updateChart = () => {
    if(!this.isRendering) {
      removeAll();
      return;

    }
  }
}