import { FindOptionsUtils, IsNull } from 'typeorm';
import { LookupBuilder } from '../lookup';
import { getObject } from './get-object';

export class IsNullLookup implements LookupBuilder {
  build(prop: string, value: string): Record<string, FindOptionsUtils> {
    return getObject(prop, IsNull());
  }
}
