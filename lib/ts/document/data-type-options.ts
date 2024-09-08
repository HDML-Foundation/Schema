// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { CommonParameters } from '../document/common-parameters.js';
import { DateParameters } from '../document/date-parameters.js';
import { DecimalParameters } from '../document/decimal-parameters.js';
import { TimeParameters } from '../document/time-parameters.js';
import { TimestampParameters } from '../document/timestamp-parameters.js';


/**
 * Data type options.
 */
export enum DataTypeOptions {
  NONE = 0,
  CommonParameters = 1,
  DecimalParameters = 2,
  DateParameters = 3,
  TimeParameters = 4,
  TimestampParameters = 5
}

export function unionToDataTypeOptions(
  type: DataTypeOptions,
  accessor: (obj:CommonParameters|DateParameters|DecimalParameters|TimeParameters|TimestampParameters) => CommonParameters|DateParameters|DecimalParameters|TimeParameters|TimestampParameters|null
): CommonParameters|DateParameters|DecimalParameters|TimeParameters|TimestampParameters|null {
  switch(DataTypeOptions[type]) {
    case 'NONE': return null; 
    case 'CommonParameters': return accessor(new CommonParameters())! as CommonParameters;
    case 'DecimalParameters': return accessor(new DecimalParameters())! as DecimalParameters;
    case 'DateParameters': return accessor(new DateParameters())! as DateParameters;
    case 'TimeParameters': return accessor(new TimeParameters())! as TimeParameters;
    case 'TimestampParameters': return accessor(new TimestampParameters())! as TimestampParameters;
    default: return null;
  }
}

export function unionListToDataTypeOptions(
  type: DataTypeOptions, 
  accessor: (index: number, obj:CommonParameters|DateParameters|DecimalParameters|TimeParameters|TimestampParameters) => CommonParameters|DateParameters|DecimalParameters|TimeParameters|TimestampParameters|null, 
  index: number
): CommonParameters|DateParameters|DecimalParameters|TimeParameters|TimestampParameters|null {
  switch(DataTypeOptions[type]) {
    case 'NONE': return null; 
    case 'CommonParameters': return accessor(index, new CommonParameters())! as CommonParameters;
    case 'DecimalParameters': return accessor(index, new DecimalParameters())! as DecimalParameters;
    case 'DateParameters': return accessor(index, new DateParameters())! as DateParameters;
    case 'TimeParameters': return accessor(index, new TimeParameters())! as TimeParameters;
    case 'TimestampParameters': return accessor(index, new TimestampParameters())! as TimestampParameters;
    default: return null;
  }
}
