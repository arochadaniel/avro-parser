export type AvroSchema = RecordType | NamedType;

export interface RecordType {
  type: "record";
  name: string;
  namespace?: string;
  doc?: string;
  aliases?: string[];
  fields: (RecordType | NamedType)[];
}

export interface NamedType {
  name: string;
  default: null | string;
  type:
    | PrimitiveType
    | PrimitiveType[]
    | Record<string, null | string | number | boolean>
    | Record<string, null | string | number | boolean>[];
}

export interface RecordField {
  name: string;
  doc?: string;
  type: AvroSchema;
  default?: any;
  order?: "ascending" | "descending" | "ignore";
}

type PrimitiveType =
  | "null"
  | "boolean"
  | "int"
  | "long"
  | "float"
  | "double"
  | "bytes"
  | "string";
