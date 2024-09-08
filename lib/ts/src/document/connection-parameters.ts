// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { BigQueryParameters } from '../document/big-query-parameters.js';
import { ElasticsearchParameters } from '../document/elasticsearch-parameters.js';
import { GoogleSheetsParameters } from '../document/google-sheets-parameters.js';
import { JDBCParameters } from '../document/jdbcparameters.js';
import { MongoDBParameters } from '../document/mongo-dbparameters.js';
import { SnowflakeParameters } from '../document/snowflake-parameters.js';


/**
 * Union type to describe DB connection parameters.
 */
export enum ConnectionParameters {
  NONE = 0,
  JDBCParameters = 1,
  BigQueryParameters = 2,
  GoogleSheetsParameters = 3,
  ElasticsearchParameters = 4,
  MongoDBParameters = 5,
  SnowflakeParameters = 6
}

export function unionToConnectionParameters(
  type: ConnectionParameters,
  accessor: (obj:BigQueryParameters|ElasticsearchParameters|GoogleSheetsParameters|JDBCParameters|MongoDBParameters|SnowflakeParameters) => BigQueryParameters|ElasticsearchParameters|GoogleSheetsParameters|JDBCParameters|MongoDBParameters|SnowflakeParameters|null
): BigQueryParameters|ElasticsearchParameters|GoogleSheetsParameters|JDBCParameters|MongoDBParameters|SnowflakeParameters|null {
  switch(ConnectionParameters[type]) {
    case 'NONE': return null; 
    case 'JDBCParameters': return accessor(new JDBCParameters())! as JDBCParameters;
    case 'BigQueryParameters': return accessor(new BigQueryParameters())! as BigQueryParameters;
    case 'GoogleSheetsParameters': return accessor(new GoogleSheetsParameters())! as GoogleSheetsParameters;
    case 'ElasticsearchParameters': return accessor(new ElasticsearchParameters())! as ElasticsearchParameters;
    case 'MongoDBParameters': return accessor(new MongoDBParameters())! as MongoDBParameters;
    case 'SnowflakeParameters': return accessor(new SnowflakeParameters())! as SnowflakeParameters;
    default: return null;
  }
}

export function unionListToConnectionParameters(
  type: ConnectionParameters, 
  accessor: (index: number, obj:BigQueryParameters|ElasticsearchParameters|GoogleSheetsParameters|JDBCParameters|MongoDBParameters|SnowflakeParameters) => BigQueryParameters|ElasticsearchParameters|GoogleSheetsParameters|JDBCParameters|MongoDBParameters|SnowflakeParameters|null, 
  index: number
): BigQueryParameters|ElasticsearchParameters|GoogleSheetsParameters|JDBCParameters|MongoDBParameters|SnowflakeParameters|null {
  switch(ConnectionParameters[type]) {
    case 'NONE': return null; 
    case 'JDBCParameters': return accessor(index, new JDBCParameters())! as JDBCParameters;
    case 'BigQueryParameters': return accessor(index, new BigQueryParameters())! as BigQueryParameters;
    case 'GoogleSheetsParameters': return accessor(index, new GoogleSheetsParameters())! as GoogleSheetsParameters;
    case 'ElasticsearchParameters': return accessor(index, new ElasticsearchParameters())! as ElasticsearchParameters;
    case 'MongoDBParameters': return accessor(index, new MongoDBParameters())! as MongoDBParameters;
    case 'SnowflakeParameters': return accessor(index, new SnowflakeParameters())! as SnowflakeParameters;
    default: return null;
  }
}
