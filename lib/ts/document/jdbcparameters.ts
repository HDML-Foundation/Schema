// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

/**
 * Parameters to connect to one the of the following DB: Postgres,
 * MySQL, MS SQL, MariaDB, Oracle, ClickHouse, Druid, Ignite,
 * Redshift.
 */
export class JDBCParameters {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):JDBCParameters {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsJDBCParameters(bb:flatbuffers.ByteBuffer, obj?:JDBCParameters):JDBCParameters {
  return (obj || new JDBCParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsJDBCParameters(bb:flatbuffers.ByteBuffer, obj?:JDBCParameters):JDBCParameters {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new JDBCParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

host():string|null
host(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
host(optionalEncoding?:any):string|Uint8Array|null {
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

ssl():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startJDBCParameters(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addHost(builder:flatbuffers.Builder, hostOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, hostOffset, 0);
}

static addUser(builder:flatbuffers.Builder, userOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, userOffset, 0);
}

static addPassword(builder:flatbuffers.Builder, passwordOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, passwordOffset, 0);
}

static addSsl(builder:flatbuffers.Builder, ssl:boolean) {
  builder.addFieldInt8(3, +ssl, +false);
}

static endJDBCParameters(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createJDBCParameters(builder:flatbuffers.Builder, hostOffset:flatbuffers.Offset, userOffset:flatbuffers.Offset, passwordOffset:flatbuffers.Offset, ssl:boolean):flatbuffers.Offset {
  JDBCParameters.startJDBCParameters(builder);
  JDBCParameters.addHost(builder, hostOffset);
  JDBCParameters.addUser(builder, userOffset);
  JDBCParameters.addPassword(builder, passwordOffset);
  JDBCParameters.addSsl(builder, ssl);
  return JDBCParameters.endJDBCParameters(builder);
}
}
