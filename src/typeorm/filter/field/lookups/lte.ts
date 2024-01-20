import { FindOptionsUtils, LessThanOrEqual } from 'typeorm';
import { LookupBuilder } from '../lookup';
import { getObject } from './get-object';

export class LowerThanOrEqualLookup implements LookupBuilder {
  build(prop: string, value: string): Record<string, FindOptionsUtils> {
    return getObject(prop, LessThanOrEqual(value));
  }
}
