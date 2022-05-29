export enum WidgetType {
  SPHERE = 'SPHERE',
  EARTH = 'EARTH',
  TEXT = 'TEXT',
  CLOCK = 'CLOCK'
}

interface DefaultWidgetOption {
  id: string;
  type: WidgetType;
  color: string;
  size: number;
}

export interface ThreeWidget extends DefaultWidgetOption {
  autoRotation: boolean;
  position: string;
  sceneType: number;
}


export interface TextWidget extends DefaultWidgetOption {
  content: string;
}
