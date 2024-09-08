// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

/**
 * Parameters to connect to the Elasticsearch.
 */
export class ElasticsearchParameters {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ElasticsearchParameters {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsElasticsearchParameters(bb:flatbuffers.ByteBuffer, obj?:ElasticsearchParameters):ElasticsearchParameters {
  return (obj || new ElasticsearchParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsElasticsearchParameters(bb:flatbuffers.ByteBuffer, obj?:ElasticsearchParameters):ElasticsearchParameters {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ElasticsearchParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

host():string|null
host(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
host(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

port():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

user():string|null
user(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
user(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

password():string|null
password(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
password(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

ssl():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

region():string|null
region(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
region(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

accessKey():string|null
accessKey(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
accessKey(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

secretKey():string|null
secretKey(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
secretKey(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startElasticsearchParameters(builder:flatbuffers.Builder) {
  builder.startObject(8);
}

static addHost(builder:flatbuffers.Builder, hostOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, hostOffset, 0);
}

static addPort(builder:flatbuffers.Builder, port:number) {
  builder.addFieldInt16(1, port, 0);
}

static addUser(builder:flatbuffers.Builder, userOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, userOffset, 0);
}

static addPassword(builder:flatbuffers.Builder, passwordOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, passwordOffset, 0);
}

static addSsl(builder:flatbuffers.Builder, ssl:boolean) {
  builder.addFieldInt8(4, +ssl, +false);
}

static addRegion(builder:flatbuffers.Builder, regionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, regionOffset, 0);
}

static addAccessKey(builder:flatbuffers.Builder, accessKeyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, accessKeyOffset, 0);
}

static addSecretKey(builder:flatbuffers.Builder, secretKeyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, secretKeyOffset, 0);
}

static endElasticsearchParameters(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createElasticsearchParameters(builder:flatbuffers.Builder, hostOffset:flatbuffers.Offset, port:number, userOffset:flatbuffers.Offset, passwordOffset:flatbuffers.Offset, ssl:boolean, regionOffset:flatbuffers.Offset, accessKeyOffset:flatbuffers.Offset, secretKeyOffset:flatbuffers.Offset):flatbuffers.Offset {
  ElasticsearchParameters.startElasticsearchParameters(builder);
  ElasticsearchParameters.addHost(builder, hostOffset);
  ElasticsearchParameters.addPort(builder, port);
  ElasticsearchParameters.addUser(builder, userOffset);
  ElasticsearchParameters.addPassword(builder, passwordOffset);
  ElasticsearchParameters.addSsl(builder, ssl);
  ElasticsearchParameters.addRegion(builder, regionOffset);
  ElasticsearchParameters.addAccessKey(builder, accessKeyOffset);
  ElasticsearchParameters.addSecretKey(builder, secretKeyOffset);
  return ElasticsearchParameters.endElasticsearchParameters(builder);
}
}
