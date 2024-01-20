import { FindOptionsUtils, MoreThanOrEqual } from 'typeorm';
import { LookupBuilder } from '../lookup';
import { getObject } from './get-object';

export class GreaterThanOrEqualLookup implements LookupBuilder {
  build(prop: string, value: string): Record<string, FindOptionsUtils> {
    return getObject(prop, MoreThanOrEqual(value));
  }
}
