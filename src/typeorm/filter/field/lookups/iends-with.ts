import { FindOptionsUtils, ILike } from 'typeorm';
import { LookupBuilder } from '../lookup';
import { getObject } from './get-object';

export class InsensitiveEndsWithLookup implements LookupBuilder {
  build(prop: string, value: string): Record<string, FindOptionsUtils> {
    return getObject(prop, ILike(`%${value}`));
  }
}
