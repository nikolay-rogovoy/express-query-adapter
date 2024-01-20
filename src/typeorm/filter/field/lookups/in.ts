import { FindOptionsUtils, In } from 'typeorm';
import { LookupBuilder } from '../lookup';
import { getObject } from './get-object';

export class InLookup implements LookupBuilder {
  build(prop: string, value: string): Record<string, FindOptionsUtils> {
    return getObject(prop, In(value.split(',')));
  }
}
