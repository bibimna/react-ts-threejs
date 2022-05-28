import { WidgetType } from "../../../../types/widget";

export default class Interface3D {
  private container: HTMLElement;
  private mouse: any;


  constructor(container: HTMLElement, widgetType: WidgetType, optionData: object) {
    this.container = container;


    // this.container.addEventListener('mousedown', this.onDocumentMouseDown.bind(this), false);
    // this.container.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false);
    // this.container.addEventListener('mouseup', this.onDocumentMouseUp.bind(this), false);
    // this.container.addEventListener('click', this.onDocumentMouseClick.bind(this), false);
    // this.container.addEventListener('mousewheel', this.onDocumentMouseWheel.bind(this), false);
  }
}
