export interface Analysis {
  name: string;
  frequency: number;
  datasource: string;
  vectors: Vector[];
}

export interface Vector {
  name: string;
}
