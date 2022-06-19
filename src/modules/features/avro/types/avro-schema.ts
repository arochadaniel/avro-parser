export type AvroSchema = DefinedType | DefinedType[];

type DefinedType = PrimitiveType | ComplexType | LogicalType | string;

type PrimitiveType =
  | "null"
  | "boolean"
  | "int"
  | "long"
  | "float"
  | "double"
  | "bytes"
  | "string";

type ComplexType = NamedType | RecordType | EnumType | FixedType;

type LogicalType = ComplexType & LogicalTypeExtension;

interface NamedType {
  type: PrimitiveType;
}

interface RecordType {
  type: "record" | "error";
  name: string;
  namespace?: string;
  doc?: string;
  aliases?: string[];
  fields: {
    name: string;
    doc?: string;
    type: AvroSchema;
    default?: any;
    order?: "ascending" | "descending" | "ignore";
  }[];
}

interface EnumType {
  type: "enum";
  name: string;
  namespace?: string;
  aliases?: string[];
  doc?: string;
  symbols: string[];
}

interface FixedType {
  type: "fixed";
  name: string;
  aliases?: string[];
  size: number;
}

interface LogicalTypeExtension {
  logicalType: string;
  [param: string]: any;
}
