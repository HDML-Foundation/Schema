// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { ExpressionParameters } from '../document/expression-parameters.js';
import { KeysParameters } from '../document/keys-parameters.js';
import { NamedParameters } from '../document/named-parameters.js';


/**
 * Filter options.
 */
export enum FilterOptions {
  NONE = 0,
  ExpressionParameters = 1,
  KeysParameters = 2,
  NamedParameters = 3
}

export function unionToFilterOptions(
  type: FilterOptions,
  accessor: (obj:ExpressionParameters|KeysParameters|NamedParameters) => ExpressionParameters|KeysParameters|NamedParameters|null
): ExpressionParameters|KeysParameters|NamedParameters|null {
  switch(FilterOptions[type]) {
    case 'NONE': return null; 
    case 'ExpressionParameters': return accessor(new ExpressionParameters())! as ExpressionParameters;
    case 'KeysParameters': return accessor(new KeysParameters())! as KeysParameters;
    case 'NamedParameters': return accessor(new NamedParameters())! as NamedParameters;
    default: return null;
  }
}

export function unionListToFilterOptions(
  type: FilterOptions, 
  accessor: (index: number, obj:ExpressionParameters|KeysParameters|NamedParameters) => ExpressionParameters|KeysParameters|NamedParameters|null, 
  index: number
): ExpressionParameters|KeysParameters|NamedParameters|null {
  switch(FilterOptions[type]) {
    case 'NONE': return null; 
    case 'ExpressionParameters': return accessor(index, new ExpressionParameters())! as ExpressionParameters;
    case 'KeysParameters': return accessor(index, new KeysParameters())! as KeysParameters;
    case 'NamedParameters': return accessor(index, new NamedParameters())! as NamedParameters;
    default: return null;
  }
}
