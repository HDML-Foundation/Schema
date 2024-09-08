// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"

	enum "enum"
)

/// Decimal data type parameters structure.
type DecimalParameters struct {
	_tab flatbuffers.Table
}

func GetRootAsDecimalParameters(buf []byte, offset flatbuffers.UOffsetT) *DecimalParameters {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &DecimalParameters{}
	x.Init(buf, n+offset)
	return x
}

func FinishDecimalParametersBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsDecimalParameters(buf []byte, offset flatbuffers.UOffsetT) *DecimalParameters {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &DecimalParameters{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedDecimalParametersBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *DecimalParameters) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *DecimalParameters) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *DecimalParameters) Nullable() bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetBool(o + rcv._tab.Pos)
	}
	return false
}

func (rcv *DecimalParameters) MutateNullable(n bool) bool {
	return rcv._tab.MutateBoolSlot(4, n)
}

func (rcv *DecimalParameters) Scale() uint16 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint16(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *DecimalParameters) MutateScale(n uint16) bool {
	return rcv._tab.MutateUint16Slot(6, n)
}

func (rcv *DecimalParameters) Precision() uint16 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetUint16(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *DecimalParameters) MutatePrecision(n uint16) bool {
	return rcv._tab.MutateUint16Slot(8, n)
}

func (rcv *DecimalParameters) BitWidth() enum.DecimalBitWidth {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return enum.DecimalBitWidth(rcv._tab.GetInt8(o + rcv._tab.Pos))
	}
	return 0
}

func (rcv *DecimalParameters) MutateBitWidth(n enum.DecimalBitWidth) bool {
	return rcv._tab.MutateInt8Slot(10, int8(n))
}

func DecimalParametersStart(builder *flatbuffers.Builder) {
	builder.StartObject(4)
}
func DecimalParametersAddNullable(builder *flatbuffers.Builder, nullable bool) {
	builder.PrependBoolSlot(0, nullable, false)
}
func DecimalParametersAddScale(builder *flatbuffers.Builder, scale uint16) {
	builder.PrependUint16Slot(1, scale, 0)
}
func DecimalParametersAddPrecision(builder *flatbuffers.Builder, precision uint16) {
	builder.PrependUint16Slot(2, precision, 0)
}
func DecimalParametersAddBitWidth(builder *flatbuffers.Builder, bitWidth enum.DecimalBitWidth) {
	builder.PrependInt8Slot(3, int8(bitWidth), 0)
}
func DecimalParametersEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
