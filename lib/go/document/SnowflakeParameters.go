// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Parameters to connect to the Snowflake.
type SnowflakeParameters struct {
	_tab flatbuffers.Table
}

func GetRootAsSnowflakeParameters(buf []byte, offset flatbuffers.UOffsetT) *SnowflakeParameters {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &SnowflakeParameters{}
	x.Init(buf, n+offset)
	return x
}

func FinishSnowflakeParametersBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsSnowflakeParameters(buf []byte, offset flatbuffers.UOffsetT) *SnowflakeParameters {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &SnowflakeParameters{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedSnowflakeParametersBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *SnowflakeParameters) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *SnowflakeParameters) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *SnowflakeParameters) Account() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *SnowflakeParameters) User() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *SnowflakeParameters) Password() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *SnowflakeParameters) Database() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *SnowflakeParameters) Role() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *SnowflakeParameters) Warehouse() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func SnowflakeParametersStart(builder *flatbuffers.Builder) {
	builder.StartObject(6)
}
func SnowflakeParametersAddAccount(builder *flatbuffers.Builder, account flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(account), 0)
}
func SnowflakeParametersAddUser(builder *flatbuffers.Builder, user flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(user), 0)
}
func SnowflakeParametersAddPassword(builder *flatbuffers.Builder, password flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(password), 0)
}
func SnowflakeParametersAddDatabase(builder *flatbuffers.Builder, database flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(database), 0)
}
func SnowflakeParametersAddRole(builder *flatbuffers.Builder, role flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(role), 0)
}
func SnowflakeParametersAddWarehouse(builder *flatbuffers.Builder, warehouse flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(5, flatbuffers.UOffsetT(warehouse), 0)
}
func SnowflakeParametersEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
