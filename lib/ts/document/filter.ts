// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { FilterOptions, unionToFilterOptions, unionListToFilterOptions } from '../document/filter-options.js';
import { FilterType } from '../enum/filter-type.js';


/**
 * Single filter structure.
 */
export class Filter {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Filter {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsFilter(bb:flatbuffers.ByteBuffer, obj?:Filter):Filter {
  return (obj || new Filter()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsFilter(bb:flatbuffers.ByteBuffer, obj?:Filter):Filter {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Filter()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

type():FilterType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : FilterType.Expr;
}

optionsType():FilterOptions {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : FilterOptions.NONE;
}

options<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startFilter(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addType(builder:flatbuffers.Builder, type:FilterType) {
  builder.addFieldInt8(0, type, FilterType.Expr);
}

static addOptionsType(builder:flatbuffers.Builder, optionsType:FilterOptions) {
  builder.addFieldInt8(1, optionsType, FilterOptions.NONE);
}

static addOptions(builder:flatbuffers.Builder, optionsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, optionsOffset, 0);
}

static endFilter(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createFilter(builder:flatbuffers.Builder, type:FilterType, optionsType:FilterOptions, optionsOffset:flatbuffers.Offset):flatbuffers.Offset {
  Filter.startFilter(builder);
  Filter.addType(builder, type);
  Filter.addOptionsType(builder, optionsType);
  Filter.addOptions(builder, optionsOffset);
  return Filter.endFilter(builder);
}
}
