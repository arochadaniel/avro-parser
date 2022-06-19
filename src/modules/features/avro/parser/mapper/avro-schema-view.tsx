import { isRecordField, isRecordType } from "./guards";

import { AvroNamedTypeItem } from "./named-type-item";
import { AvroSchema } from "../../types";
import { AvroSchemaMapper } from "./avro-schema-mapper";
import { FC } from "react";
import classes from "./named-type-item/avro-named-type-item.module.css";

interface Props {
  schema: AvroSchema;
  level?: number;
  path?: string;
}

export const AvroSchemaView: FC<Props> = ({ schema, level = 0, path = "" }) => {
  return (
    <div>
      {isRecordType(schema) || isRecordField(schema) ? (
        <div>
          <br />
          <details open>
            <summary>{schema.name}</summary>
            <br />
            <div style={{ paddingLeft: level + 1 * 30, width: "100%" }}>
              <div className={classes.item} style={{ borderStyle: "solid" }}>
                <p>Columns</p>
                <div className={classes.checkboxes}>
                  <p>Mask</p>
                  <p>Encrypt</p>
                </div>
              </div>
              <AvroSchemaMapper schema={schema} level={level} path={path} />
            </div>
          </details>
        </div>
      ) : (
        <AvroNamedTypeItem field={schema} path={path} />
      )}
    </div>
  );
};
