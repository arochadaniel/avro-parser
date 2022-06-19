import { AvroSchema, RecordType } from "@features/avro/types";
import { FC, useMemo } from "react";
import { isRecordField, isRecordType } from "./guards";

import { AvroSchemaView } from "./avro-schema-view";
import { sortAvroSchemaFields } from "./utils";

interface Props {
  schema: AvroSchema;
  path: string;
  level: number;
}

export const AvroSchemaMapper: FC<Props> = ({ schema, path, level }) => {
  const fields = useMemo(() => {
    if (!isRecordType(schema) && !isRecordField(schema)) {
      return [];
    }

    return sortAvroSchemaFields(
      (schema as RecordType).fields || (schema.type as RecordType).fields || []
    );
  }, [schema]);

  return (
    <div>
      {fields.map((f) => {
        const newPath = path ? path + "." + f.name : f.name;
        return (
          <AvroSchemaView
            schema={f}
            key={`${newPath}`}
            level={level + 1}
            path={newPath}
          />
        );
      })}
    </div>
  );
};
