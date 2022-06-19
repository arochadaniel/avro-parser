import { NamedType, RecordType } from "@features/avro/types";

export const isRecordType = (
  property: NamedType | RecordType
): property is RecordType => {
  return property.type === "record";
};
