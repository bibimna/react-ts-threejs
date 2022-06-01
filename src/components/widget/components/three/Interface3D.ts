import { WidgetType } from "../../../../types/widget";
import { AmbientLight, BoxGeometry, Light, Mesh, MeshBasicMaterial, Scene, Vector2, Vector3, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CameraManager } from "../../../../lib/three";
import { CameraType } from "../../../../lib/three/CameraManager";
import Sphere from "./Sphere";

export interface SceneInfo {
  scene?: Scene;
  sceneOrtho?: Scene;

  cameraPer?: CameraManager;
  cameraOrtho?: CameraManager;

  renderer?: WebGLRenderer;
  controls?: OrbitControls;
  controlsOrtho?: OrbitControls;
  light?: Light;
}

export interface LayoutInfo {
  container?: HTMLElement;
  widgetType?: WidgetType;
  mouse?: Vector2;
  isDragging?: boolean;
  previousMousePosition?: Vector2;
  isRendering?: boolean;
  timeSet?: NodeJS.Timeout;
  sceneComponent?: Sphere;
}

export default class Interface3D {
  sceneInfo: SceneInfo = {};
  layoutInfo: LayoutInfo = {};
  cube?: Mesh;

  constructor(container: HTMLElement, widgetType: WidgetType, optionData: object) {
    this.layoutInfo = {
      container,
      widgetType,
      mouse: new Vector2(),
      previousMousePosition: new Vector2(),
      isDragging: false,
      isRendering: false
    }

    this.createScene();

    // this.container.addEventListener('mousedown', this.onDocumentMouseDown.bind(this), false);
    // this.container.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false);
    // this.container.addEventListener('mouseup', this.onDocumentMouseUp.bind(this), false);
    // this.container.addEventListener('click', this.onDocumentMouseClick.bind(this), false);
    // this.container.addEventListener('mousewheel', this.onDocumentMouseWheel.bind(this), false);
  }

  createScene() {
    this.sceneInfo = {
      scene: new Scene(),
      cameraPer: new CameraManager(),
      renderer: new WebGLRenderer({
        antialias: true,
        alpha: true,
      })
    }

    const { cameraPer, renderer } = this.sceneInfo;

    this.createCamera();
    this.setControls();

    if(cameraPer?.camera && renderer) this.sceneInfo.controls = new OrbitControls(cameraPer.camera, renderer.domElement);
    this.setRenderer();

    this.layoutInfo.isRendering = true;

    // 테스트용 박스 append
    const geometry = new BoxGeometry( 20, 20 , 10);
    const material = new MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
    this.cube = new Mesh(geometry, material);
    this.sceneInfo.scene?.add(this.cube);

    this.appendLight();
    this.start();
  }

  // perspective camera 생성 (ortho 는 추후 추가)
  createCamera = () => {
    const { cameraPer, scene } = this.sceneInfo;
    const offsetWidth = this.layoutInfo.container?.offsetWidth || 1920;
    const offsetHeight = this.layoutInfo.container?.offsetHeight || 1080;

    cameraPer?.createCamera({
      type: CameraType.Perspective,
      width: offsetWidth,
      height: offsetHeight
    });

    cameraPer?.initCamera(new Vector3(0, 0, 200), new Vector3(0, 0, 0));
    if(cameraPer?.camera) scene?.add(cameraPer.camera);
  }

  // renderer 설정
  setRenderer = () => {
    const { renderer } = this.sceneInfo;

    if(!renderer) return;

    const offsetWidth = this.layoutInfo.container?.offsetWidth || 1920;
    const offsetHeight = this.layoutInfo.container?.offsetHeight || 1080;

    renderer.setClearColor(0x2e4b61, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(offsetWidth, offsetHeight);

    this.layoutInfo.container?.appendChild(renderer.domElement);
  }

  setControls = () => {
    const { controls } = this.sceneInfo;

    if(!controls) return;

    controls.target = new Vector3(0, 0, 0);
    controls.autoRotate = true;

    controls.autoRotateSpeed = 1;
    controls.rotateSpeed = 0.065; // 자동 회전 속도

    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.enablePan = false;
  }

  appendLight = () => {
    if(!this.sceneInfo.scene) return;

    this.sceneInfo.light = new AmbientLight(0xffffff);
    this.sceneInfo.scene.add(this.sceneInfo.light);
  };

  // render 시작
  start = () => {
    if(!this.layoutInfo.sceneComponent) {
      this.layoutInfo.sceneComponent = new Sphere(this.layoutInfo, this.sceneInfo);
    }

    this.animate();
  }

  animate = () => {
    let { isRendering, timeSet } = this.layoutInfo;

    if (!isRendering) {
      if(timeSet) clearTimeout(timeSet);

      return -1;
    }

    if(isRendering) {
      const time = 1000 / 60;

      this.layoutInfo.timeSet = setTimeout(() => {
        requestAnimationFrame(() => {
          this.animate();
        });
      }, time);

      this.sceneInfo.controls?.update();
      this.render();

    }
  }

  render = () => {
    // append 3d widget component
    if (this.layoutInfo.sceneComponent) {
      this.layoutInfo.sceneComponent.updateChart();
    }

    // renderer start
    if(this.sceneInfo.renderer) {
      this.sceneInfo.renderer.clearDepth();
      if(this.sceneInfo.scene && this.sceneInfo.cameraPer?.camera) {
        this.sceneInfo.renderer.render(this.sceneInfo.scene, this.sceneInfo.cameraPer.camera);
      }
    }
  };
}
