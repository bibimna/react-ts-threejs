export enum WidgetType {
  SPHERE = 'SPHERE',
  EARTH = 'EARTH',

}

interface DefaultWidgetOption {
  id: string;
  color: string;
  size: number;
}

export interface ThreeWidget extends DefaultWidgetOption {
  type: 'sphere' | 'earth' | 'text';
  autoRotation: boolean;
  position: string;
  sceneType: number;
}

export interface ClockWidget extends DefaultWidgetOption {
  timeZone: 'KR' | 'US';
}

export interface TextWidget extends DefaultWidgetOption {
  content: string;
}
