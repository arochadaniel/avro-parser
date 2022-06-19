import { NamedType, RecordType } from "@features/avro/types";

export const sortAvroSchemaFields = (fields: (NamedType | RecordType)[]) => {
  const nonExpandableFields = [...fields].filter(
    (f) => typeof f.type === "string" || Array.isArray(f.type)
  );

  const expandableFields = [...fields].filter(
    (f) => typeof f.type !== "string" && !Array.isArray(f.type)
  );

  return [...nonExpandableFields, ...expandableFields];
};
