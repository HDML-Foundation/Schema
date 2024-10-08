// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

/**
 * Parameters to connect to the Snowflake.
 */
export class SnowflakeParameters {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SnowflakeParameters {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSnowflakeParameters(bb:flatbuffers.ByteBuffer, obj?:SnowflakeParameters):SnowflakeParameters {
  return (obj || new SnowflakeParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSnowflakeParameters(bb:flatbuffers.ByteBuffer, obj?:SnowflakeParameters):SnowflakeParameters {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SnowflakeParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

account():string|null
account(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
account(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

user():string|null
user(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
user(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

password():string|null
password(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
password(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

database():string|null
database(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
database(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

role():string|null
role(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
role(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

warehouse():string|null
warehouse(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
warehouse(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startSnowflakeParameters(builder:flatbuffers.Builder) {
  builder.startObject(6);
}

static addAccount(builder:flatbuffers.Builder, accountOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, accountOffset, 0);
}

static addUser(builder:flatbuffers.Builder, userOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, userOffset, 0);
}

static addPassword(builder:flatbuffers.Builder, passwordOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, passwordOffset, 0);
}

static addDatabase(builder:flatbuffers.Builder, databaseOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, databaseOffset, 0);
}

static addRole(builder:flatbuffers.Builder, roleOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, roleOffset, 0);
}

static addWarehouse(builder:flatbuffers.Builder, warehouseOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, warehouseOffset, 0);
}

static endSnowflakeParameters(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSnowflakeParameters(builder:flatbuffers.Builder, accountOffset:flatbuffers.Offset, userOffset:flatbuffers.Offset, passwordOffset:flatbuffers.Offset, databaseOffset:flatbuffers.Offset, roleOffset:flatbuffers.Offset, warehouseOffset:flatbuffers.Offset):flatbuffers.Offset {
  SnowflakeParameters.startSnowflakeParameters(builder);
  SnowflakeParameters.addAccount(builder, accountOffset);
  SnowflakeParameters.addUser(builder, userOffset);
  SnowflakeParameters.addPassword(builder, passwordOffset);
  SnowflakeParameters.addDatabase(builder, databaseOffset);
  SnowflakeParameters.addRole(builder, roleOffset);
  SnowflakeParameters.addWarehouse(builder, warehouseOffset);
  return SnowflakeParameters.endSnowflakeParameters(builder);
}
}
