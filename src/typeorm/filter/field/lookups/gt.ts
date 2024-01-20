import { FindOptionsUtils, MoreThan } from 'typeorm';
import { LookupBuilder } from '../lookup';
import { getObject } from './get-object';

export class GreaterThanLookup implements LookupBuilder {
  build(prop: string, value: string): Record<string, FindOptionsUtils> {
    return getObject(prop, MoreThan(value));
  }
}
