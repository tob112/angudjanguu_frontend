import { Vector } from './vector.interface';
/**
 * Created by tobi on 7/3/17.
 */

export interface Analysis {


  name: string;
  frequency: number;
  datasource: string;
  placeholder1: string;
  placeholder2: number;
  placeholder3: string;
  vectors: Vector[],
  messgroesen: Array<any>,


}
