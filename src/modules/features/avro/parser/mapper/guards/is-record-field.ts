import { NamedType, RecordField, RecordType } from "@features/avro/types";

export const isRecordField = (
  type: string | RecordField | RecordType | NamedType
): type is RecordField => {
  const casted = type as RecordField;

  return typeof casted?.type === "object" && !Array.isArray(casted.type);
};
