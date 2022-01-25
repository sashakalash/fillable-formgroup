import { IPrefix } from './prefix.interface';

export interface IPrefixGroup {
  name: string;
  numbers: IPrefix[];
  disabled?: boolean;
}
