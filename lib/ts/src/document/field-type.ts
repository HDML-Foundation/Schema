// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { DataTypeOptions, unionToDataTypeOptions, unionListToDataTypeOptions } from '../document/data-type-options.js';
import { DataType } from '../enum/data-type.js';


/**
 * Field type structure.
 */
export class FieldType {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):FieldType {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsFieldType(bb:flatbuffers.ByteBuffer, obj?:FieldType):FieldType {
  return (obj || new FieldType()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsFieldType(bb:flatbuffers.ByteBuffer, obj?:FieldType):FieldType {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new FieldType()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

type():DataType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : DataType.Int8;
}

optionsType():DataTypeOptions {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : DataTypeOptions.NONE;
}

options<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startFieldType(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addType(builder:flatbuffers.Builder, type:DataType) {
  builder.addFieldInt8(0, type, DataType.Int8);
}

static addOptionsType(builder:flatbuffers.Builder, optionsType:DataTypeOptions) {
  builder.addFieldInt8(1, optionsType, DataTypeOptions.NONE);
}

static addOptions(builder:flatbuffers.Builder, optionsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, optionsOffset, 0);
}

static endFieldType(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createFieldType(builder:flatbuffers.Builder, type:DataType, optionsType:DataTypeOptions, optionsOffset:flatbuffers.Offset):flatbuffers.Offset {
  FieldType.startFieldType(builder);
  FieldType.addType(builder, type);
  FieldType.addOptionsType(builder, optionsType);
  FieldType.addOptions(builder, optionsOffset);
  return FieldType.endFieldType(builder);
}
}
