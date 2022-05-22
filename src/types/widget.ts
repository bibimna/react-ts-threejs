export interface text {
  color: string;
  size: number;
}

export interface earth {
  autoRotation: boolean;

}

export interface clock extends text{
  timeZone: string;
}

