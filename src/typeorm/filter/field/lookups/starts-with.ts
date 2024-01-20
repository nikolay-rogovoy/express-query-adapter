import { FindOptionsUtils, Like } from 'typeorm';
import { LookupBuilder } from '../lookup';
import { getObject } from './get-object';

export class StartsWithLookup implements LookupBuilder {
  build(prop: string, value: string): Record<string, FindOptionsUtils> {
    return getObject(prop, Like(`${value}%`));
  }
}
