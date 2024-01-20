import { FindOptionsUtils, LessThan } from 'typeorm';
import { LookupBuilder } from '../lookup';
import { getObject } from './get-object';

export class LowerThanLookup implements LookupBuilder {
  build(prop: string, value: string): Record<string, FindOptionsUtils> {
    return getObject(prop, LessThan(value));
  }
}
